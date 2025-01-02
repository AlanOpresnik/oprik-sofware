import { serviceInterface } from "@/interface/serviceInterface";

const serviceData: serviceInterface[] = [
  {
    id: 1,
    type: "Tienda web / E-commerce completo",
    description:
      "🎯 Te ayudamos a crear una tienda online profesional y personalizada, ideal para hacer crecer tu negocio. Incluye:\n" +
      "✅ Diseño único y moderno, adaptado a tu marca.\n" +
      "📱 Optimización móvil para una experiencia fluida en cualquier dispositivo.\n" +
      "💳 Integración de pagos seguros como Mercado Pago, PayPal, y más.\n" +
      "🛍️ Gestión sencilla de productos y stock.\n" +
      "🔍 SEO optimizado para aumentar tu visibilidad en buscadores.\n" +
      "🛠️ Soporte técnico para acompañarte durante y después del lanzamiento.",
      price: "$240",
      largeDescription: "Transforma tu negocio con una tienda online profesional y totalmente personalizada. Con nuestro servicio, podrás crear una plataforma de ventas eficiente, moderna y adaptada a las necesidades de tus clientes, para maximizar tus ventas y mejorar tu presencia digital",
      images: [
        'https://www.cdnlogo.com/logos/n/80/next-js.svg',
        'https://icons-for-free.com/iff/png/512/mongodb+plain+wordmark-1324760553130770870.png',
        'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        'https://elionshops.com/images/uploads/mercadopago.png'
      ],

    techs: [
        { title: 'Next.js', for: 'FrontEnd, diseño', description: 'Next.js es un framework de desarrollo web basado en React, creado por Vercel, que se utiliza para construir aplicaciones web modernas y rápidas. Ofrece características avanzadas que simplifican el desarrollo de aplicaciones web, tanto del lado del cliente (frontend) como del lado del servidor (backend).' },
        { title: 'MongoDB', for: 'Base de datos', description: 'MongoDB es un sistema de gestión de bases de datos NoSQL, diseñado para escalar horizontalmente y proporcionar una gran cantidad de capacidad de almacenamiento.' },
        { title: 'Node.js', for: 'Backend code', description: 'Node.js es un entorno de ejecución de JavaScript en tiempo de ejecución multiplataforma, diseñado para construir servicios de red escalables y aplicaciones de back-end.' },
        { title: 'React.js', for: 'FrontEnd code', description: ' se utiliza para construir interfaces de usuario interactivas y dinámicas. ' },
        { title: 'Material UI', for: 'Componentes frontEnd', description: 'es una biblioteca de componentes de interfaz de usuario para React que implementa el lenguaje de diseño Material Design de Google. Es una de las herramientas más populares para crear aplicaciones web modernas,' },
        { title: 'Typescript', for: 'experiencia de desarrollo', description: 'TypeScript es un superset de JavaScript desarrollado por Microsoft, que añade tipado estático y otras características avanzadas al lenguaje.' },
      {title: "Mercado Pago" , for: 'Pasarela de pagos ' , description: 'Mercado Pago es una herramienta desarrollada por Mercado Libre que permite a los vendedores cobrar por las ventas de su tienda online y de su local físico. Los clientes pueden pagar con tarjetas de crédito, transferencia bancaria o en efectivo.'}
      ],
      aprox_delivery_time: "25 / 30 Dias habiles",
      subscription: 'En dos pagos',
      buttonText: 'Comprar Servicio E-commerce',
      active: true,
      features: [
        { text: 'Sistema de pagos en línea (Integración con plataformas como Stripe o PayPal)', available: true },
        { text: 'Panel de administración para gestionar contenido, usuarios y configuraciones', available: true },
        { text: 'Diseño responsivo para adaptarse a dispositivos móviles, tablets y desktops', available: true },
        { text: 'Autenticación de usuarios (registro, inicio de sesión y recuperación de contraseña)', available: true },
        { text: 'Gestión de productos o servicios (catálogo interactivo, filtros, etc.)', available: true },
        { text: 'Carrito de compras para tiendas en línea', available: true },
        { text: 'SEO optimizado para mejorar la visibilidad en motores de búsqueda', available: true },
        { text: 'Sección de testimonios para mostrar opiniones de clientes satisfechos', available: true },
        // Agregar más objetos según sea necesario
      ]

  },
];
export default serviceData;