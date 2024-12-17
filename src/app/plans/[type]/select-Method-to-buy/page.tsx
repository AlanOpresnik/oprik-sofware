import Link from "next/link";
import pricingData from '@/components/pricingSection/pricingData';

interface Props {
  params: Promise<{
    type: string;
    params: string;
  }>;
}

const SelectMethodToBuy = async ({ params }: Props) => {
  const resolvedParams = await params;
  const { type } = resolvedParams;

  const plan = pricingData.find(p => p.type === type)
  if (!plan) return 'No hay plan seleccionado'
  // Datos dinámicos del plan
  const planMessage = encodeURIComponent(
    `Hola! Quiero comprar el siguiente plan:
  - Tipo de plan: ${type}  
  - Con un valor de: ${plan.price}  
  - Con los siguientes beneficios:
  ${plan.features
      .filter((f) => f.available !== false)
      .map((f) => `  * ${f.text}`)
    .join("\n")}`
  );

  const whatsappUrl = `https://wa.me/1123498925?text=${planMessage}`;

  return (
    <div
      className={`w-full py-32 text-white px-4 flex flex-col items-center scale-fade-in`}
    >
      <h4 className="text-3xl px-2 mb-4 md:text-4xl font-semibold md:mb-12">
        ¿Qué método eliges para comprar tu plan?
      </h4>
      <div className="md:flex w-full justify-center gap-24">
        {/* Opción WhatsApp */}
        <div className="border rounded-xl mb-6 mt-2 md:mb-0 shadow-md md:shadow-xl p-6 max-w-[500px]">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Continuar la compra por WhatsApp
          </h3>
          <p className="mb-2 text-sm md:text-base">
            Al comprar por WhatsApp puedes tener más demora y tendrás que esperar a que estemos en horario laboral para que tus consultas sean resueltas. También, al comprar por WhatsApp, la creación y el acceso al dashboard demorará.
          </p>
          <Link href={whatsappUrl} passHref>
            <button
              className="main-color mt-2 p-3 bg-primary text-black font-semibold capitalize hover:opacity-70 hover:bg-primary/90 rounded-xl"
            >
              Continuar compra en WhatsApp
            </button>
          </Link>
        </div>

        {/* Opción Mercado Pago */}
        <div className="border relative rounded-xl shadow-xl p-6 max-w-[500px] mb-16 md:mb-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Comprar por Mercado Pago en la web
          </h3>
          <p className="mb-2 text-sm md:text-base">
            Al comprar por la web te ahorras muchos problemas, como la
            comunicación y la demora que podamos llegar a tener. Completarás el
            formulario, comprarás, accederás a tu panel de cliente ¡y listo!
          </p>
          <button
            disabled
            className="bg-primary/50 mt-2 text-black p-3 font-semibold capitalize cursor-not-allowed rounded-xl"
          >
            Continuar compra en la web
          </button>
          <div className="absolute top-[-20px] right-[-30px]">
            <p className="bg-primary p-2 rounded-full text-black font-bold">
              PRÓXIMAMENTE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMethodToBuy;
