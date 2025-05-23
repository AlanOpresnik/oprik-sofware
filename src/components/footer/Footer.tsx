'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const LINKS = [
        {
            title: "Inicio",
            items: [
                { label: "Acerca de nosotros", href: "/about-us" },
                { label: "Nuestras cursadas", href: "/courses" },
            ],
        },
        {
            title: "Cursadas destacadas",
            items: [
                { label: "Full Stack con Next.js", href: "/academy/desarrollo-web-fullstack-con-nextjs" },
                { label: "Desarrollo web con React.js", href: "/academy/aprende-desarrollo-web-con-reactjs" },
            ],
        },
        {
            title: "Formas de pago",
            items: [
                { label: "Visa / Mastercard", href: "" },
                { label: "Mercado Pago", href: "" },
                { label: "Transferencias", href: "" },
            ],
        },
    ];




    return (
        <footer className="relative w-full  p-4 border-t pt-12  text-white my-12">
            <div className="mx-auto w-full  md:px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-3">
                    <div className='flex flex-col'>
                        <p className="mb-6 text-2xl font-semibold">
                            Oprik Software
                        </p>
                        <div className='flex gap-1'>
                            <p>Telefono:</p>
                            <p>+54 9 11 2349-8925</p>

                        </div>
                        <div className='flex gap-1'>
                            <p>Correo:</p>
                            <p>opriksoftware@gmail.com</p>

                        </div>
                    </div>
                    <div className="grid col-span-2 w-full md:grid-cols-3 justify-between gap-12">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Link
                                    href={'/'}
                                    color="blue-gray"
                                    className="mb-3 font-medium opacity-40"
                                >
                                    {title}
                                </Link>
                                {items?.map((link) => (
                                    <li className='py-0.5' key={link.label}>
                                        {link.href === '' ? (
                                            <p>
                                                {link.label}
                                            </p>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                color="gray"
                                                className="mb-2 font-normal transition-colors hover:opacity-75"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Link
                        href={'/'}
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        @ 2024 Oprik Software.
                        derechos reservados.
                    </Link>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <a target='_BLANK' href="https://www.instagram.com/oprik_software/" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path

                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"

                                />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer