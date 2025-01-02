export interface PricingPlan {
    type?: string;
    price: string;
    id?: string;
    subscription: string;
    description: string;
    largeDescription?: string;
    buttonText: string;
    active: boolean;
    recomended?: boolean;
    images: string[];
    techs: { title: string, for: string, description: string }[];
    features: { text: string; available: boolean }[];
    className?: string;
}

const pricingPlans: PricingPlan[] = [
    {
        type: "Personal",
        price: "$99",
        subscription: "Primer precio",
        description: "Perfecto para un sitio web personal, por ejemplo un portfolio web",
        largeDescription: "Este plan incluye más de 5 secciones dentro de la misma página. Contiene un formulario de contacto, un botón de WhatsApp y contacto directo por correo electrónico. El diseño es completamente responsivo para dispositivos móviles y cuenta con un SEO optimizado para posicionar tu web en los primeros resultados de Google.",
        buttonText: "Plan Personal",
        active: false,
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png',
            'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'

        ],
        techs: [
            {title: 'vitejs', for:'FrontEnd, diseño' , description: 'Vite es un builder y servidor de desarrollo ultrarrápido para aplicaciones web modernas,'},
            { title: 'React.js', for: 'FrontEnd code', description: ' se utiliza para construir interfaces de usuario interactivas y dinámicas. ' },
            { title: 'Material UI', for: 'Componentes frontEnd', description: 'es una biblioteca de componentes de interfaz de usuario para React que implementa el lenguaje de diseño Material Design de Google. Es una de las herramientas más populares para crear aplicaciones web modernas,' },
            { title: 'Typescript', for: 'experiencia de desarrollo', description: 'TypeScript es un superset de JavaScript desarrollado por Microsoft, que añade tipado estático y otras características avanzadas al lenguaje.' }
        ],
        features: [
            { text: "Diseño personalizado", available: true },
            { text: "Dominio .com / .com.ar", available: true },
            { text: "Certificado de Seguridad SSL", available: true },
            { text: "Botón de WhatsApp en la página", available: true },
            { text: "Formulario de contacto por correo", available: true },
            { text: "Panel de administración", available: false },
            { text: "Ecommerce / Tienda online", available: false },
        ],
    },
    {
        type: "Emprendimiento",
        price: "$189",
        subscription: "Primer precio",
        description:
            "Perfecto para una tienda online, para gestionar ventas, órdenes y stock.",
        largeDescription: "Este plan incluye hasta 10 secciones dentro de la página web. Además de todas las funcionalidades del plan Personal, incorpora un panel de administración donde podrás gestionar tus productos, stock y órdenes directamente desde la web. Tendrás la posibilidad de subir la cantidad de productos que necesites. Este plan puede ampliarse según las necesidades del cliente.",
        buttonText: "Plan Emprendimiento",
        active: true,
        recomended: true,
        images: [
            'https://www.cdnlogo.com/logos/n/80/next-js.svg',
            'https://icons-for-free.com/iff/png/512/mongodb+plain+wordmark-1324760553130770870.png',
            'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
            'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
        ],
        techs: [
            { title: 'Next.js', for: 'FrontEnd, diseño', description: 'Next.js es un framework de desarrollo web basado en React, creado por Vercel, que se utiliza para construir aplicaciones web modernas y rápidas. Ofrece características avanzadas que simplifican el desarrollo de aplicaciones web, tanto del lado del cliente (frontend) como del lado del servidor (backend).' },
            { title: 'MongoDB', for: 'Base de datos', description: 'MongoDB es un sistema de gestión de bases de datos NoSQL, diseñado para escalar horizontalmente y proporcionar una gran cantidad de capacidad de almacenamiento.' },
            { title: 'Node.js', for: 'Backend code', description: 'Node.js es un entorno de ejecución de JavaScript en tiempo de ejecución multiplataforma, diseñado para construir servicios de red escalables y aplicaciones de back-end.' },
            { title: 'React.js', for: 'FrontEnd code', description: ' se utiliza para construir interfaces de usuario interactivas y dinámicas. ' },
            { title: 'Material UI', for: 'Componentes frontEnd', description: 'es una biblioteca de componentes de interfaz de usuario para React que implementa el lenguaje de diseño Material Design de Google. Es una de las herramientas más populares para crear aplicaciones web modernas,' },
            { title: 'Typescript', for: 'experiencia de desarrollo', description: 'TypeScript es un superset de JavaScript desarrollado por Microsoft, que añade tipado estático y otras características avanzadas al lenguaje.' }
        ],
        features: [
            { text: "Diseño personalizado", available: true },
            { text: "Dominio .com / .com.ar", available: true },
            { text: "Certificado de Seguridad SSL", available: true },
            { text: "Botón de WhatsApp en la página", available: true },
            { text: "Formulario de contacto por correo", available: true },
            { text: "Panel de administración", available: true },
            { text: "Ecommerce / Tienda online", available: true },
            { text: "Mercado Pago", available: true },
            { text: "Sistema de cotización de envíos", available: false },
            { text: "Sistema de descuento por cupones", available: false },
        ],
        className: "md:top-[-80px]",
    },
    {
        type: "Personalizado",
        price: "Precio a cotizar",
        subscription: "",
        description:
            "Perfecto para empresas o emprendimientos que necesiten un sitio web con todas las prestaciones",
        largeDescription: "Este plan es personalizado y completamente diseñado para satisfacer las necesidades de los clientes más exigentes. Está pensado para marcas consolidadas en la industria, con un alto tráfico en sus redes. Este plan incluye todas las funcionalidades que requieras para tu web y está desarrollado 100% a tu medida.",
        buttonText: "Plan Personalizado",
        active: false,
        images: [
            'https://www.cdnlogo.com/logos/n/80/next-js.svg',
            'https://icons-for-free.com/iff/png/512/mongodb+plain+wordmark-1324760553130770870.png',
            'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
            'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png',
            'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
        ],
        techs: [
            { title: 'Next.js', for: 'FrontEnd, diseño', description: 'Next.js es un framework de desarrollo web basado en React, creado por Vercel, que se utiliza para construir aplicaciones web modernas y rápidas. Ofrece características avanzadas que simplifican el desarrollo de aplicaciones web, tanto del lado del cliente (frontend) como del lado del servidor (backend).' },
            { title: 'MongoDB', for: 'Base de datos', description: 'MongoDB es un sistema de gestión de bases de datos NoSQL, diseñado para escalar horizontalmente y proporcionar una gran cantidad de capacidad de almacenamiento.' },
            { title: 'Node.js', for: 'Backend code', description: 'Node.js es un entorno de ejecución de JavaScript en tiempo de ejecución multiplataforma, diseñado para construir servicios de red escalables y aplicaciones de back-end.' },
            { title: 'React.js', for: 'FrontEnd code', description: ' se utiliza para construir interfaces de usuario interactivas y dinámicas. ' },
            { title: 'Material UI', for: 'Componentes frontEnd', description: 'es una biblioteca de componentes de interfaz de usuario para React que implementa el lenguaje de diseño Material Design de Google. Es una de las herramientas más populares para crear aplicaciones web modernas,' },
            { title: 'Typescript', for: 'experiencia de desarrollo', description: 'TypeScript es un superset de JavaScript desarrollado por Microsoft, que añade tipado estático y otras características avanzadas al lenguaje.' }
        ],
        features: [
            { text: "Diseño personalizado", available: true },
            { text: "Dominio .com / .com.ar", available: true },
            { text: "Certificado de Seguridad SSL", available: true },
            { text: "Botón de WhatsApp en la página", available: true },
            { text: "Formulario de contacto por correo", available: true },
            { text: "Panel de administración", available: true },
            { text: "Ecommerce / Tienda online", available: true },
            { text: "Mercado Pago", available: true },
            { text: "Sistema de cotización de envíos", available: true },
            { text: "Sistema de descuento por cupones", available: true },
            { text: "Y mucho más...", available: true },
        ],
    },
];

export default pricingPlans;