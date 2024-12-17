'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import DrawerNav from './DrawerMobile/DrawerNav';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession()
  console.log(session)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])



  const navList = [
    {
      title: "Inicio", path: '/'
    },
    {
      title: 'Clientes', path: '/clientes'
    }
  ]
  return (
    <nav className={`w-full h-[39px] py-6 ml-[-10px] mt-6  flex items-center justify-between md:px-24 `}>
      <div className='flex items-center '>
        <div className='md:hidden'>
          <DrawerNav />
        </div>
        <h1 className='text-white font-bold items-center'>OPRIK SOFTWARE</h1>
      </div>
      <div className='hidden md:block '>
        <ul className={` flex transition-colors justify-end`}>
          {navList.map((nav) => (
            <li key={nav.title}>
              <Link className='text-white px-5 py-2 relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full' href={nav.path}>
                {nav.title}
              </Link>
            </li>
          ))}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-transparent text-white focus:!bg-transparent focus:!text-white py-0 fo'>Planes de desarrollo</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/plans/Emprendimiento"
                          >

                            <div className="mb-2 mt-4 text-lg font-medium">
                              Plan Emprendimiento
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              esta web cuenta con todo lo el plan Personal pero tambien se le incluye un Panel
                              de adminsitracion, donde podras gestionar tus productos, stock y ordenes desde la web,
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem className='' href="/plans/Personal" title="Plan Personal">
                        este plan cuenta con mas de 5 secciones dentro de la misma pagina, cuenta con un formulario de contacto, boton de Watshapp y contacto por correo electronico directo
                      </ListItem>
                      <ListItem href="/plans/Personalizado" title="Plan Personalizado">
                        Con este plan tenes todos los beneficios de los demas planes , y contas con una capa extra de personalizacion y podemos agregar funcionalidades que necesites
                      </ListItem>
                      <ListItem href="/contacto" title="Contacto">
                        Necesitas mas Informacion ? contactanos dando click aca
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <Link
              href='#'
              className='text-white px-5 py-2 relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full'
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-2'>
        {session.status === 'unauthenticated'  ? (
          <div className=''>
            <Link href={'/login'}
              className='px-5 py-2 !text-white  border bg-transparent rounded-xl text-sm hover:bg-slate-50 transition-colors
       hover:!text-black font-semibold'>
              Contactar
            </Link>
          </div>
        ) : (
          <div>
            <Link href={'/client/dashboard'}
              className='px-5 py-2 !text-white  border bg-transparent rounded-xl text-sm hover:bg-slate-50 transition-colors
          hover:!text-black font-semibold'>
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"