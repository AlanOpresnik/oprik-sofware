'use client'
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  action: string;
  target?: string;
};

type FeaturesListProps = {
  features: Feature[];
};

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
  
    const cards = containerRef.current.querySelectorAll(".feature-card");
  
    // GSAP Animation with ScrollTrigger using fromTo
    gsap.fromTo(
      cards,
      {
        y: 50, // Estado inicial (debajo)
        opacity: 0, // Estado inicial (invisible)
      },
      {
        y: 0, // Estado final (sin desplazamiento)
        opacity: 1, // Estado final (totalmente visible)
        stagger: 0.2, // Un pequeño retraso entre cada tarjeta
        scrollTrigger: {
          trigger: containerRef.current, // El contenedor activa la animación
          start: "top 100%", // Inicia cuando el contenedor está al 80% de la ventana
          end: "bottom 0%", // Termina cuando el contenedor está al 20%
          toggleActions: "play none none none", // Se reproduce solo una vez
          markers: false, // Puedes poner "true" para ver los marcadores de ScrollTrigger mientras desarrollas
        },
      }
    );
  
  }, []);
  

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
    >
      {features.map((feature, index) => (
        <Card
          key={index}
          className="feature-card bg-transparent text-white border shadow-lg hover:shadow-xl transition-shadow"
        >
          <CardHeader className="pb-2">{feature.icon}</CardHeader>
          <CardContent className="space-y-4">
            <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
            <p>{feature.description}</p>
            <Link
              target={feature.target ? feature.target : ""}
              href={feature.href}
              className="block text-primary hover:text-primary/80 font-medium"
            >
              {feature.action}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesList;
