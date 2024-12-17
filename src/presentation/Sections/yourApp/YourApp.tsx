'use client'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"

export default function YourApp() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.from('#all-app', {
          opacity: 0, 
          x: -100,
          duration: 2, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: '#all-app',
            
            start: "top 80%", // La animación comienza cuando el 100% del trigger esté en la vista
            toggleActions: "play none none reverse", // Se activa solo cuando el trigger entra en la vista y vuelve cuando sale
          }
        });
      }, []);
      

    return (
        <div id="all-app" className=" py-24 sm:pb-12 overflow-x-hidden">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-primary">Consigue tu web rapido</h2>
                <h3 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Todo lo que ofrecemos al desarrollar una  web
                </h3>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-[#111827] lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                                    Adaptacion a celular
                                </p>
                                <h4 className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                                    Tu pagina web estara adaptada a todos los dispositivos moviles
                                </h4>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src="/movileImg.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-[#111827] max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">Rendimiento y velocidad de tu web</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                                    Usamos las ultimas tecnologias para el desarrollo de software, lo que nos permite tener una velocidad muy rapida en el renderizado de la web
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-[#111827]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">Seguridad</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                                    Tenemos protocolos estrictos de seguridad, todo panel de administracion tiene su cuenta cifrada en la base de datos.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-[#111827] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                                    Codigo poderoso y mantenible
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                                    Si en algun momento tenes ganas de modificar tu web, se puede hacer sin problemas ya que contamos con codigo mantenible y organizado
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                NotificationSetting.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <code className="text-white ">
                                        import {<span className="text-[#7dd3fc]">useState</span>} from <span className="text-emerald-300">'react'</span><br />
                                        import {<span className="text-[#7dd3fc]">Switch</span>} from <span className="text-emerald-300">'@headlessui/react'</span><br /><br />

                                        <span className="text-indigo-400">function Example</span>() &#123;<br />
                                        &nbsp;&nbsp;const [<span className="text-[#7dd3fc]">enabled</span>, <span className="text-[#7dd3fc]">setEnabled</span>] = useState(<span className="text-[#7dd3fc]">true</span>)<br /><br />

                                        &nbsp;&nbsp;return (<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-indigo-400">form</span> action="/<span className="text-emerald-300">notification-settings</span>" method="<span className="text-emerald-300">post</span>"&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-indigo-400">Switch</span> checked=&#123;<span className="text-[#7dd3fc]">enabled</span>&#125; onChange=&#123;<span className="text-[#7dd3fc]">setEnabled</span>&#125; name="<span className="text-emerald-300">notifications</span>"&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#123;<span className="text-gray-500">/* ... */</span>&#125;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-indigo-400">Switch</span>&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-indigo-400">button</span>&gt;Submit&lt;/<span className="text-indigo-400">button</span>&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-indigo-400">form</span>&gt;<br />
                                        &nbsp;&nbsp;)<br />
                                        &#125;
                                    </code>

                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}