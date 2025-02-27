'use client'
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const SignUpPage = () => {
    const [error, setError] = useState()
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        try {
            const signUpResponse = await axios.post('/api/signup', {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            })
            const res = await signIn('credentials', {
                email: signUpResponse.data.email,
                password: formData.get('password'),
                redirect: false,
            })
            if (res?.ok) return router.push('/client/dashboard')
            console.log(res)
            console.log(signUpResponse)
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }

    return (
        <div className=" w-full   dark:bg-neutral-900 text-gray-900 flex justify-center relative ">
            <div className="max-w-screen-xl m-0 sm:m-10  dark:bg-neutral-700 border bg-white bg-opacity-10 text-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="absolute top-12 left-16">
                    <Link className="text-sm" href={'/'}>{'<'} Regresar al inicio</Link>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 mt-12s overflow-y-hidden">

                    <div className="mt-6 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-semibold">
                            Crea una cuenta
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button

                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">Sign Up with Google</span>
                                </button>
                            </div>

                            <div className="my-6 pb-4 sm:my-10 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm  tracking-wide font-medium dark:text-white transform translate-y-1/2">
                                    O Registrate completando el formulario
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">

                                <input

                                    className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                />
                                <input

                                    className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input

                                    className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                />
                                {error && (
                                    <p className="text-white mt-4 p-2 text-center rounded-xl bg-red-500">{error}</p>
                                )}
                                <button className="mt-5 tracking-wide font-semibold border-primary border w-full py-4 rounded-lg hover:opacity-75 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>

                                    <span className="ml-3">Registrarse</span>
                                </button>
                                <p className="text-sm  mt-6">
                                    Si ya tienes una cuenta{" "}
                                    <Link href={"/login"} className="text-primary ml-1">
                                        {" "}
                                       Iniciar sesion
                                    </Link>
                                </p>
                                <p className="mt-6 text-xs  text-center text-white">
                                    Acepto los{" "}
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted"
                                    >
                                        Terminos y servicios{" "}
                                    </a>
                                    y tambien{" "}
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                    de Linuu
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage