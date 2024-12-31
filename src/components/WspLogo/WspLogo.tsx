'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const WspLogo = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setVisible(true); // Mostrar el logo cuando el scroll es mayor a 200px
      } else {
        setVisible(false); // Ocultar el logo cuando el scroll es menor a 200px
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.to('.wsp-Logo-container', {
        opacity: 1,
        right: '0.9rem',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to('.wsp-Logo-container', {
        opacity: 0,
        right: '-10rem',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [visible]);

  return (
    <div className={`wsp-Logo-container overflow-x-hidden ${visible ? 'visible' : ''}`} style={{ opacity: 0, right: '-10rem' }}>
      <a href={"https://wa.me/+5491123498925"} target='_blank'>
        <Image width={300} height={300} className='wsp-logo-img' src={'/wspLogo.webp'} alt='Logo de WhatsApp' />
      </a>
    </div>
  )
}

export default WspLogo
