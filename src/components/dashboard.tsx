import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { ProjectList } from "./project-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert } from "@mui/material";
import api from "@/api/api";
import { getServerSession } from "next-auth";

export async function Dashboard({ userId }: { userId: string }) {
  //+
  const order = await api.getOrderById(userId);
  //order.data?.client.order.plan_name -> METODO PARA OBTENER EL ORDER
  const { data: orden } = order;
  if (!orden) return "no hay orden";
  //:TODO MEJORAR LEGIBILIDAD
  console.log(order);
  return (
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
                          <span className="text-primary">29/07/2024</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Valor de la compra{" "}
                          <span className="text-primary">$98.900.00</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Compra hecha a nombre de
                          <span className="text-primary"> Julian mercedes</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Metodo de pago
                          <span className="text-primary"> Mercado pago</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Estado del pago
                          <span className="text-primary"> Exitoso</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Tiempo de entrega aproximado{" "}
                          <span className="text-primary">18 dias</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Desarrollador a cargo{" "}
                          <span className="text-primary">Alan Opresnik</span>
                        </p>
                        <p className="text-xl font-bold mt-4">
                          Contacto{" "}
                          <span className="text-primary">+54 11 1111111 </span>
                        </p>
                        <div className="xl:absolute bottom-[-180px]">
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
            <ProjectList />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$32,123</div>
                <p className="text-xs text-muted-foreground mt-1">
                  11.38% Since last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$45,850</div>
                <p className="text-xs text-muted-foreground mt-1">
                  9.61% Since last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$2,039</div>
                <p className="text-xs text-muted-foreground mt-1">
                  2.27% Since last month
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
