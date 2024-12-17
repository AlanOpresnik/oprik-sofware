import { Sidebar } from "./sidebar";
import { ProjectList } from "./project-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert } from "@mui/material";
import api from "@/api/api";
import { getServerSession } from "next-auth";
import { formatDateToDDMMYYYY } from '@/lib/format/formatDate'
import { formatCurrency } from "@/lib/format/formatMoney";
import Link from "next/link";
import Image from "next/image";
export async function Dashboard({ userId }: { userId: string }) {
  {
    const order = await api.getOrderById(userId);
    const { data: orden } = order;

    if (!orden) return "no hay orden";
    const payment_method = orden.client.order.payment_method === "MERCADO_PAGO" ? "Mercado pago" : orden.client.order.payment_method
    const payment_status = orden.client.order.payment_status === "PENDING" ? "Pendiente" : orden.client.order.payment_status === 'COMPLETED' ? 'Completado' : "Fallo"
    return (
      <p>proximamente</p>
    )
  }
  {

    /*
    <div className="flex w-full">
      <div className=" flex w-full">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="p-4 md:p-8 space-y-6 flex-1">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-muted/30 text-white">
              <CardHeader>
                <CardTitle>Plan contratado</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="">
                  <div className="  ">
                    <div className="relative">
                      <div className="text-5xl font-bold">
                        Plan{" "}
                        <span className="text-primary">
                          {orden.client.order.plan_name}
                        </span>
                      </div>
                      <div>
                        <p className="text-xl font-bold mt-6">
                          Fecha de compra{" "}
                          <span className="text-primary">{`${formatDateToDDMMYYYY(orden.client.order.createdAt)}`}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Valor de la compra{" "}
                          <span className="text-primary">{formatCurrency(orden.client.order.price)}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Compra hecha a nombre de
                          <span className="text-primary"> {orden.client.name}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Metodo de pago
                          <span className="text-primary"> {payment_method}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Estado del pago
                          <span className="text-primary"> {payment_status}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Tiempo de entrega aproximado{" "}
                          <span className="text-primary">{orden.client.order.estimated_delivery_time}</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Desarrollador a cargo{" "}
                          <span className="text-primary">Alan Opresnik</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Contacto{" "}
                          <span className="text-primary">+54 11 2341-7825 </span>
                        </p>
                        <div className="xl:absolute bottom-[-160px]">
                          <Alert
                            sx={{
                              marginTop: 4,
                            }}
                            severity="warning"
                          >
                            A medida que el desarrollador avance con tu web
                            podras ir viendola en tiempo real en el cuadrante
                            siguiente
                          </Alert>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <ProjectList web={orden.client.order.dev_info.web_preview} />
          </div>
          <div>
          <div className='p-8 border md:grid grid-cols-3 text-white items-center rounded-xl  shadow-lg mb-12 relative'>
            <div className='col-span-2 max-w-[690px]'>
                <h3 className='text-4xl font-semibold mb-2'>Experencia uno a uno</h3>
                <p className='mb-6'>Observa los mensajes y las actualizaciones que el desarrollador deja sobre tu web, avances o anotaciones que te permiten estar mas presente en el desarrollo de tu web</p>
                <Link className="bg-primary text-black p-3 rounded-xl font-semibold" href="/client/dashboard/messages">Ver mensajes</Link>
            </div>
            <div className='flex justify-center absolute md:relative bottom-[-0px] z-0 right-0'>
                <Image className='max-h-[100px] md:max-h-max object-center' src='/ilustration_messages.png' width={270} height={100} alt='Support' />
            </div>
        </div>
          </div>
        </main>
      </div>
    </div> */}
}
