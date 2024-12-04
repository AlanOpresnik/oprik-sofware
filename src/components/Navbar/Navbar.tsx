'use client'
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
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
import DrawerNav from './DrawerNav';
const Navbar = () => {
  const navList = [
    {
      title: "Inicio", path: '/'
    },
    {
      title: 'Clientes', path: '/clientes'
    }
  ]
  return (
    <nav className='w-full h-[39px] mt-4 flex items-center justify-between'>
      <div className='flex items-center'>
      <div className='md:hidden'>
        <DrawerNav />
      </div>
        <h1 className='text-white font-bold items-center'>OPRIK SOFTWARE</h1>
      </div>
      <div className='hidden md:block'>
        <ul className='flex justify-end'>
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
                  <NavigationMenuTrigger className='bg-transparent text-white py-0 fo'>Planes de desarrollo</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >

                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy and
                              paste into your apps. Accessible. Customizable. Open
                              Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
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
        <Button className='px-5 py-2 !text-white border rounded-xl text-normal hover:bg-slate-50 transition-colors hover:!text-black font-semibold'>Soy cliente</Button>
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