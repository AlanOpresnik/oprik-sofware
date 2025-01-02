import pricingData from '@/components/pricingSection/pricingData';
import Image from 'next/image';
import FadeInWrapper from '@/components/fadeInWrapper/FadeInWrapper';
import { Metadata} from 'next';
import TechsPlan from '@/components/techsPlan/TechsPlan';
import PricingCardPlan from '@/components/PricingCardPlan/PricingCardPlan';
import { cardData } from '@/components/Clients/ClientsData/clientData';
import { ExternalLink } from 'lucide-react';
import { Link } from 'next-view-transitions';


type Props = {
  params: Promise<{ type: string }>
}
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const type = (await params).type;

  // fetch data
  const data = pricingData.find(p => p.type === type);

  return {
    title: `Plan web ${data?.type} OPRIK SOFTWARE`,
  };
}


const PlanPage = async ({
  params,
}: {
  params: Promise<{ type: string }>
}) => {
  const type = (await params).type
 
 
    const plan = pricingData.find((item) => item.type === type);
    
    
    if (!plan) {
      return (
        <div className="text-white">
        <p>El plan especificado no existe.</p>
      </div>
    );
  }
  
  const CATEGORY_CLIENTS_MATCH = cardData.filter((i) => i.category === plan.type);

  if(!CATEGORY_CLIENTS_MATCH) return 'No hay proyectos realizados con este plan'



  return (
    <FadeInWrapper>
      <div className="mt-6 md:mt-12 flex flex-col md:grid md:grid-cols-2 md:gap-12 text-white">
        {/* Información del plan */}
        <div className="pr-4">
          <p className="text-4xl font-semibold mb-2">
            Plan <span className="text-primary">{plan.type}</span>
          </p>
          <p>{plan.largeDescription}</p>
          <div className="hidden md:block">
            <div className="pt-4 border-t mt-4">
              <p className="text-2xl font-semibold">Tecnologías que se usarán</p>
            </div>
            <div className="flex max-w-[120px] gap-6 mt-4 py-4">
              {plan.images.map((img, i) => (
                <Image
                  className="w-[30px] md:w-[40px]"
                  key={i}
                  src={img}
                  alt="tecnología usada"
                  width={50}
                  height={60}
                />
              ))}
            </div>
         <TechsPlan plan={plan} />
          </div>
        </div>

        {/* Tarjeta del plan */}
        <PricingCardPlan plan={plan}/>

        {/* Tecnologías en pantallas pequeñas */}
        <div className="md:hidden">
          <div className="pt-4">
            <p className="text-2xl font-semibold">Tecnologías que se usarán</p>
          </div>
          <div className="flex max-w-[120px] gap-6 mt-4 py-4">
            {plan.images.map((img, i) => (
              <Image
                className="w-[30px]"
                key={i}
                src={img}
                alt="tecnología usada"
                width={50}
                height={60}
              />
            ))}
          </div>
          <div className="mt-4">
            {plan.techs.map((tech, i) => (
              <div key={i} className="my-6">
                <div className="flex gap-2 items-center">
                  <p className="text-xl font-semibold text-primary border-b">{tech.title}:</p>
                  <p className="mt-1 text-orange-200">{tech.for}</p>
                </div>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-2'>
          <p className='text-4xl font-semibold'>Proyectos Realizados con este plan</p>
          <div className='flex items-center gap-6 mt-6'>
            {CATEGORY_CLIENTS_MATCH.map((c) => (
              <div className='hover:border p-2 rounded-xl'>
              <Link target='_blank' href={c.web} className='  rounded-xl'>
                <Image className='rounded-md ' src={c.webImg} width={600} height={400} alt={c.name} />
                <div className='flex flex-col gap-1 '>
                  <div className='flex justify-between items-center'>
                  <p className='text-xl font-semibold mt-4'>{c.personRole}</p>
                  <ExternalLink size={20} className='mr-2 mt-2'/>
                  </div>
                  <p className='text-primary'>{c.plan}</p>
                  <p className='line-clamp-3'>{c.overview}</p>
                  <p className='text-primary font-semibold hover:underline'>Visitar web</p>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};


export default PlanPage;