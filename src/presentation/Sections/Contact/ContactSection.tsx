'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Email, Phone } from '@mui/icons-material';

interface FormData {
  user_name: string;
  phone: string;
  user_email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    phone: '',
    user_email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); // Nuevo estado

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '#form',
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#form',
          start: "top 76%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true); // Indicar que el usuario ha intentado enviar el formulario

    const { user_name, user_email, message, phone } = formData;

    // Validar campos
    if (user_name === '' || user_email === '' || message === '' || phone.toString().length < 10) {
      setIsSent(false);
      return;
    }

    const templateParams = {
      to_name: 'Oprik Software',
      user_name,
      user_email,
      message,
      phone,
    };

    emailjs
      .send(
        'service_o0hu54h',
        'template_l0vylan',
        templateParams,
        '1kt5mY-1xW1eQyKAz'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Mostrar mensaje de éxito
        },
        (error) => {
          console.log(error.text);
          setIsSent(false); // Mostrar mensaje de error
        }
      );
  };

  return (
    <div id="form" className="relative flex justify-center p-4 bg-white bg-opacity-10 rounded-xl sm:items-center pb-14">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Ponete en contacto con nosotros
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Completa el formulario y envia tu consulta
              </p>
              <p className="text-normal mt-4 flex items-end gap-2  sm:text-xl font-medium text-gray-600 dark:text-gray-400 ">
                <Email /> opriksoftware@gmail.com
              </p>
              <p className="text-normal flex items-center gap-1 sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-4">
                <Phone /> +54 11 2349-8925
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="user_name" className="hidden">Nombre completo</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  placeholder="Nombre completo"
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="hidden">Número de teléfono</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  placeholder="Número de teléfono"
                  onChange={handleChange}
                  className="w-full mt-4 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="user_email" className="hidden">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Mensaje"
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="md:w-32 bg-primary hover:bg-blue-dark text-black font-bold py-3 px-6 rounded-lg mt-3 hover:bg-opacity-70 transition ease-in-out duration-300"
              >
                Enviar
              </button>

              {hasSubmitted && isSent && <div className="text-green-500 mt-2">¡Mensaje enviado correctamente!</div>}
              {hasSubmitted && !isSent && <div className="text-red-500 mt-2">Hubo un error al enviar el mensaje. Intenta de nuevo.</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
