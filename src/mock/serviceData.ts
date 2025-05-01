import { serviceInterface } from "@/interface/serviceInterface";

const serviceData: serviceInterface[] = [
  {
    id: "1",
    type: "Servicio Tienda web / E-commerce completo",
    description:
      "🎯 Te ayudamos a crear una tienda online profesional y personalizada, ideal para hacer crecer tu negocio. Incluye:\n" +
      "✅ Diseño único y moderno, adaptado a tu marca.\n" +
      "📱 Optimización móvil para una experiencia fluida en cualquier dispositivo.\n" +
      "💳 Integración de pagos seguros como Mercado Pago, PayPal, y más.\n" +
      "🛍️ Gestión sencilla de productos y stock.\n" +
      "🔍 SEO optimizado para aumentar tu visibilidad en buscadores.\n" +
      "🛠️ Soporte técnico para acompañarte durante y después del lanzamiento.",
    price: "$240",
    largeDescription:
      "Transforma tu negocio con una tienda online profesional y totalmente personalizada. Con nuestro servicio, podrás crear una plataforma de ventas eficiente, moderna y adaptada a las necesidades de tus clientes, para maximizar tus ventas y mejorar tu presencia digital",
    images: [
      "https://www.cdnlogo.com/logos/n/80/next-js.svg",
      "https://icons-for-free.com/iff/png/512/mongodb+plain+wordmark-1324760553130770870.png",
      "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      "https://mui.com/static/logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      "https://elionshops.com/images/uploads/mercadopago.png",
    ],

    techs: [
      {
        title: "Next.js",
        for: "FrontEnd, diseño",
        description:
          "Next.js es un framework de desarrollo web basado en React, creado por Vercel, que se utiliza para construir aplicaciones web modernas y rápidas.",
      },
      {
        title: "MongoDB",
        for: "Base de datos",
        description:
          "MongoDB es un sistema de gestión de bases de datos NoSQL, diseñado para escalar horizontalmente y proporcionar una gran cantidad de capacidad de almacenamiento.",
      },
      {
        title: "Node.js",
        for: "Backend code",
        description:
          "Node.js es un entorno de ejecución de JavaScript en tiempo de ejecución multiplataforma, diseñado para construir servicios de red escalables y aplicaciones de back-end.",
      },
      {
        title: "React.js",
        for: "FrontEnd code",
        description:
          " se utiliza para construir interfaces de usuario interactivas y dinámicas. ",
      },
      {
        title: "Material UI",
        for: "Componentes frontEnd",
        description:
          "es una biblioteca de componentes de interfaz de usuario para React que implementa el lenguaje de diseño Material Design de Google. Es una de las herramientas más populares para crear aplicaciones web modernas,",
      },
      {
        title: "Typescript",
        for: "experiencia de desarrollo",
        description:
          "TypeScript es un superset de JavaScript desarrollado por Microsoft, que añade tipado estático y otras características avanzadas al lenguaje.",
      },
      {
        title: "Mercado Pago",
        for: "Pasarela de pagos ",
        description:
          "Mercado Pago es una herramienta desarrollada por Mercado Libre que permite a los vendedores cobrar por las ventas de su tienda online y de su local físico. Los clientes pueden pagar con tarjetas de crédito, transferencia bancaria o en efectivo.",
      },
    ],
    aprox_delivery_time: "25 / 30 Dias habiles",
    subscription: "En dos pagos",
    buttonText: "Comprar Servicio E-commerce",
    active: true,
    features: [
      {
        text: "Sistema de pagos en línea (Integración con plataformas como Stripe o PayPal)",
        available: true,
      },
      {
        text: "Panel de administración para gestionar contenido, usuarios y configuraciones",
        available: true,
      },
      {
        text: "Diseño responsivo para adaptarse a dispositivos móviles, tablets y desktops",
        available: true,
      },
      {
        text: "Autenticación de usuarios (registro, inicio de sesión y recuperación de contraseña)",
        available: true,
      },
      {
        text: "Gestión de productos o servicios (catálogo interactivo, filtros, etc.)",
        available: true,
      },
      { text: "Carrito de compras para tiendas en línea", available: true },
      {
        text: "SEO optimizado para mejorar la visibilidad en motores de búsqueda",
        available: true,
      },
      {
        text: "Sección de testimonios para mostrar opiniones de clientes satisfechos",
        available: true,
      },
      // Agregar más objetos según sea necesario
    ],
  },
  {
    id: "2",
    type: "Servicio Página web / Aplicacion mobile para gestión de turnos",
    description:
      "📅 Simplifica la organización de tus citas con una página web profesional de gestión de turnos. Incluye:\n" +
      "✅ Diseño intuitivo y moderno, adaptado a tu marca.\n" +
      "📱 Optimización móvil para que tus clientes puedan reservar fácilmente desde cualquier dispositivo.\n" +
      "🔔 Notificaciones automáticas por correo electrónico para confirmar y recordar turnos.\n" +
      "🕒 Panel de administración para gestionar horarios y disponibilidad.\n" +
      "🔍 SEO optimizado para atraer más clientes a tu página.\n" +
      "🛠️ Soporte técnico para garantizar el correcto funcionamiento de tu sistema.",
    price: "$180",
    largeDescription:
      "Optimiza la gestión de tu negocio con una página web profesional diseñada para la administración de turnos. Nuestro servicio te ofrece una solución eficiente, personalizada y moderna para que puedas gestionar reservas, horarios y disponibilidad de manera sencilla, mejorando la experiencia de tus clientes y potenciando tu productividad.",
    images: [
      "https://www.cdnlogo.com/logos/n/80/next-js.svg",
      "https://icons-for-free.com/iff/png/512/mongodb+plain+wordmark-1324760553130770870.png",
      "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      "https://mui.com/static/logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      "https://img.icons8.com/external-flat-juicy-fish/512/external-calendar-office-flat-flat-juicy-fish.png",
    ],
    techs: [
      {
        title: "Next.js",
        for: "FrontEnd, diseño",
        description:
          "Next.js es un framework de desarrollo web basado en React, creado por Vercel, que permite construir aplicaciones rápidas y modernas.",
      },
      {
        title: "MongoDB",
        for: "Base de datos",
        description:
          "MongoDB es un sistema de gestión de bases de datos NoSQL, ideal para almacenar información de usuarios y reservas de manera eficiente.",
      },
      {
        title: "Node.js",
        for: "Backend code",
        description:
          "Node.js permite gestionar lógica de negocio, como la programación de citas y notificaciones automáticas, de manera escalable.",
      },
      {
        title: "React.js",
        for: "FrontEnd code",
        description:
          "React.js se utiliza para construir una interfaz de usuario interactiva que permita a los clientes reservar turnos fácilmente.",
      },
      {
        title: "Material UI",
        for: "Componentes frontEnd",
        description:
          "Material UI proporciona componentes estilizados y funcionales para crear un diseño profesional y moderno.",
      },
      {
        title: "TypeScript",
        for: "Experiencia de desarrollo",
        description:
          "TypeScript mejora la calidad del código, asegurando un desarrollo más robusto y mantenible.",
      },
      {
        title: "Notificaciones por correo",
        for: "Comunicación con clientes",
        description:
          "El sistema enviará correos automáticos para confirmar, modificar o recordar turnos a los clientes.",
      },
    ],
    aprox_delivery_time: "15 / 20 Días hábiles",
    subscription: "Pago único",
    buttonText: "Contratar Gestión de Turnos",
    active: true,
    features: [
      {
        text: "Gestión de turnos y disponibilidad en tiempo real",
        available: true,
      },
      {
        text: "Notificaciones automáticas para clientes y administradores",
        available: true,
      },
      {
        text: "Panel de administración para gestionar horarios y reservas",
        available: true,
      },
      {
        text: "Diseño responsivo para dispositivos móviles, tablets y desktops",
        available: true,
      },
      {
        text: "Integración con calendario externo (Google Calendar, Outlook, etc.)",
        available: true,
      },
      {
        text: "Autenticación de usuarios (registro, inicio de sesión)",
        available: true,
      },
      {
        text: "SEO optimizado para atraer más usuarios a tu página",
        available: true,
      },
      {
        text: "Funcionalidad para reprogramar o cancelar turnos",
        available: true,
      },
    ],
  },
  
];
export default serviceData;
