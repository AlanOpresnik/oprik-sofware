"use client"

import { useState } from 'react'
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { MetricCard } from "./metric-card"
import { ProjectList } from "./project-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { Alert } from '@mui/material'

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex w-full">
      <div>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>
      </div>

      <div className=" flex w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
        </Sheet>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="p-4 md:p-8 space-y-6 flex-1">
        

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-muted/30 text-white">
              <CardHeader>
                <CardTitle>Plan contratado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" relative">
                  <div className=" flex ">
                    <div className="">
                      <div className="text-5xl font-bold">Plan <span className='text-primary'>personal</span></div>
                      <div>
                        <p className="text-xl font-bold mt-6">Fecha de compra <span className='text-primary'>29/07/2024</span></p>
                        <p className="text-xl font-bold mt-4">Valor de la compra <span className='text-primary'>$98.900.00</span></p>
                        <p className="text-xl font-bold mt-4">Tiempo de entrega aproximado <span className='text-primary'>18 dias</span></p>
                        <p className="text-xl font-bold mt-4">Desarrollador a cargo <span className='text-primary'>Alan Opresnik</span></p>
                        <p className="text-xl font-bold mt-4">Contacto <span className='text-primary'>+54 11 1111111 </span></p>
                        <div className='absolute bottom-[-290px]'>
                        <Alert sx={{
                          marginTop: 4
                        }} severity="warning">A medida que el desarrollador avance con tu web podras ir viendola en tiempo real en el cuadrante siguiente</Alert>
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
  )
}

