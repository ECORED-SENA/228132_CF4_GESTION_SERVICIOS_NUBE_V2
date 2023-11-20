export default {
  global: {
    componenteFormativo:
      'Diseño y documentación de propuesta para servicios en la nube',
    descripcionCurso:
      'Este componente proporciona la información necesaria para conformar una propuesta de implementación de servicios en la nube, de acuerdo a los requerimientos de los sistemas de información de las organizaciones y las buenas prácticas, para garantizar la disponibilidad, confidencialidad e integridad de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Estrategias de migración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y características',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Contratación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de contrato',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Proveedores de servicio en la nube',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Proyectos de TI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Contratación',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2013). Decreto Número 1377 del 27 de junio de 2013.',
      tipo: 'PDF',
      descarga: '/downloads/articles-9011_documento.pdf',
    },
    {
      tema: '2. Contratación',
      referencia:
        'Agencia española de protección de datos. (2013). Guía para clientes que contraten servicios de Computing.',
      tipo: 'PDF',
      descarga:
        '/downloads/GuíaParaClientesQueContratenServiciosDeCloudComputing-AGPD.pdf',
    },
    {
      tema: '5. Proyectos de TI',
      referencia:
        'República de Colombia, Ministerio de tecnologías de la información y las comunicaciones.  (2012). Ley 1581 de 2012.',
      tipo: 'PDF',
      descarga: '/downloads/Ley_1581_de_2012.pdf',
    },
    {
      tema: '3. Proveedores de servicio en la nube',
      referencia:
        'Página relacionada con los proveedores de servicios en la nube. Accedida el 27 de diciembre de 2021 Public Cloud Services Comparison, comparecloud.in',
      tipo: 'Página web',
      link: 'https://comparecloud.in/',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'La comunicación consciente consiste en la transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: 'Contratación',
      significado:
        'Según la RAE (Real Academia Española) define contratación como “Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'La computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Migración',
      significado:
        'En tecnología, consiste en el desplazamiento del <i>software</i>, aplicaciones o sistemas de información de una infraestructura tecnológica a otra, por ejemplo, la migración de una aplicación de un servidor local a un servidor en la nube.',
    },
    {
      termino: 'Proveedor',
      significado: 'Sujeto o entidad que suministra un producto o servicios.',
    },
  ],
  referencias: [
    {
      referencia: 'Allcode.com (2023). 10 Top Cloud Providers in 2023. ',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube.',
      link:
        'https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia: 'RAE - Real Academia Española (2021). Contratar.',
      link: 'https://dle.rae.es/contratar',
    },
    {
      referencia: 'SANTOS GARCÍA (2012).  Comunicación oral y escrita.',
      link:
        'https://www.aliat.click/BibliotecasDigitales/Axiologicas/Comunicacion_oral_y_escrita.pdf',
    },
    {
      referencia:
        'SECRETARIA GENERAL DE LA ORGANIZACIÓN DE LOS ESTADOS AMERICANOS (1992). Honduras - Proyecto de Manejo de los Recursos Naturales Renovables de la Cuenca del Embalse el Cajón - Estudio de Factibilidad. Costos y financiamiento.',
      link: 'https://www.oas.org/dsd/publications/Unit/oea15s/ch09.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Pablo Cesar Pardo Ortiz',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'José Luis Bastidas Pérez',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Joaquín Patiño Cerón',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Peter Emerson Pinchao Solís',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca, Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodóloga para la formación virtual',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Validación Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura-Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
