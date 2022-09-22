import { icons } from '../../assets'
import { Project } from '../../types'

const projectList: Project[] = [
  {
    id: 1,
    title: 'Marketplace App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo de software. Busco insertarme en la industria IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.',
    to: '/project/1',
    github: 'https://github.com/jruizsilva/e-commerce-labs',
    deploy: 'https://e-commerce-labs.vercel.app',
    techList: [
      {
        id: 1,
        name: 'html',
        svg: icons.html,
        content:
          'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
      },
      {
        id: 2,
        name: 'css3',
        svg: icons.css3,
        content:
          'Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US)'
      },
      {
        id: 3,
        name: 'javascript',
        svg: icons.javascript,
        content:
          'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). '
      },
      {
        id: 4,
        name: 'react',
        svg: icons.react,
        content:
          'React es una librería Javascript focalizada en el desarrollo de interfaces de usuario. Así se define la propia librería y evidentemente, esa es su principal área de trabajo. Sin embargo, lo cierto es que en React encontramos un excelente aliado para hacer todo tipo de aplicaciones web, SPA (Single Page Application) o incluso aplicaciones para móviles. Para ello, alrededor de React existe un completo ecosistema de módulos, herramientas y componentes capaces de ayudar al desarrollador a cubrir objetivos avanzados con relativamente poco esfuerzo.'
      },
      {
        id: 5,
        name: 'redux',
        svg: icons.redux,
        content:
          'Redux es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible. Está pensado para reducir el número de relaciones entre componentes de la aplicación y mantener un flujo de datos sencillo.'
      },
      {
        id: 6,
        name: 'express',
        svg: icons.express,
        content:
          'Básicamente es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.'
      },
      {
        id: 7,
        name: 'postgresql',
        svg: icons.postgresql,
        content:
          'PostgreSQL, o simplemente Postgres para darle un nombre más pintoresco, es un sistema de código abierto de administración de bases de datos del tipo relacional, aunque también es posible ejecutar consultas que sean no relaciones. En este sistema, las consultas relacionales se basan en SQL, mientras que las no relacionales hacen uso de JSON.'
      },
      {
        id: 8,
        name: 'sequelize',
        svg: icons.sequelize,
        content:
          'Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.'
      }
    ],
    overview: 'https://i.ibb.co/3kLt0Z6/Marketplace-App.png'
  },
  {
    id: 2,
    title: 'Finances App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo de software. Busco insertarme en la industria IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.',
    to: '/project/2',
    github: 'https://github.com/jruizsilva/challenge-fullstack-alkemy',
    deploy: 'https://challenge-fullstack-alkemy-six.vercel.app',
    techList: [
      {
        id: 1,
        name: 'html',
        svg: icons.html,
        content:
          'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
      },
      {
        id: 2,
        name: 'css3',
        svg: icons.css3,
        content:
          'Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US)'
      },
      {
        id: 3,
        name: 'javascript',
        svg: icons.javascript,
        content:
          'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). '
      },
      {
        id: 4,
        name: 'react',
        svg: icons.react,
        content:
          'React es una librería Javascript focalizada en el desarrollo de interfaces de usuario. Así se define la propia librería y evidentemente, esa es su principal área de trabajo. Sin embargo, lo cierto es que en React encontramos un excelente aliado para hacer todo tipo de aplicaciones web, SPA (Single Page Application) o incluso aplicaciones para móviles. Para ello, alrededor de React existe un completo ecosistema de módulos, herramientas y componentes capaces de ayudar al desarrollador a cubrir objetivos avanzados con relativamente poco esfuerzo.'
      },
      {
        id: 5,
        name: 'redux',
        svg: icons.redux,
        content:
          'Redux es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible. Está pensado para reducir el número de relaciones entre componentes de la aplicación y mantener un flujo de datos sencillo.'
      },
      {
        id: 6,
        name: 'express',
        svg: icons.express,
        content:
          'Básicamente es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.'
      },
      {
        id: 7,
        name: 'postgresql',
        svg: icons.postgresql,
        content:
          'PostgreSQL, o simplemente Postgres para darle un nombre más pintoresco, es un sistema de código abierto de administración de bases de datos del tipo relacional, aunque también es posible ejecutar consultas que sean no relaciones. En este sistema, las consultas relacionales se basan en SQL, mientras que las no relacionales hacen uso de JSON.'
      },
      {
        id: 8,
        name: 'sequelize',
        svg: icons.sequelize,
        content:
          'Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.'
      }
    ],
    overview: 'https://i.ibb.co/QPrwrV8/Mis-finanzas-app.png'
  }
]

export { projectList }
