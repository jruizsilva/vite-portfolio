import { icons, projects } from '../../assets'
import { Project } from '../../types'

const projectList: Project[] = [
  {
    id: 1,
    title: 'Marketplace App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo de software. Busco insertarme en la industria IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.',
    github: 'https://github.com/jruizsilva/e-commerce-labs',
    deploy: 'https://e-commerce-labs.vercel.app',
    techList: [
      {
        id: 1,
        title: 'html',
        svg: icons.html
      },
      {
        id: 2,
        title: 'css',
        svg: icons.css3
      },
      {
        id: 3,
        title: 'javascript',
        svg: icons.javascript
      },
      {
        id: 4,
        title: 'react',
        svg: icons.react
      },
      {
        id: 5,
        title: 'redux',
        svg: icons.redux
      },
      {
        id: 6,
        title: 'express',
        svg: icons.express
      },
      {
        id: 7,
        title: 'postgre',
        svg: icons.postgresql
      },
      {
        id: 8,
        title: 'sequelize',
        svg: icons.sequelize
      }
    ],
    overview:
      'https://i.ibb.co/3kLt0Z6/Marketplace-App.png',
    category: 'full-stack'
  },
  {
    id: 2,
    title: 'Finances App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo de software. Busco insertarme en la industria IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.',
    github:
      'https://github.com/jruizsilva/challenge-fullstack-alkemy',
    deploy:
      'https://challenge-fullstack-alkemy-six.vercel.app',
    techList: [
      {
        id: 1,
        title: 'html',
        svg: icons.html
      },
      {
        id: 2,
        title: 'css',
        svg: icons.css3
      },
      {
        id: 3,
        title: 'javascript',
        svg: icons.javascript
      },
      {
        id: 4,
        title: 'react',
        svg: icons.react
      },
      {
        id: 5,
        title: 'redux',
        svg: icons.redux
      },
      {
        id: 6,
        title: 'express',
        svg: icons.express
      },
      {
        id: 7,
        title: 'postgre',
        svg: icons.postgresql
      },
      {
        id: 8,
        title: 'sequelize',
        svg: icons.sequelize
      }
    ],
    overview:
      'https://i.ibb.co/dPGYGvb/Mis-finanzas-app.png',
    category: 'full-stack'
  },
  {
    id: 3,
    title: 'Finances App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo de software. Busco insertarme en la industria IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.',
    github:
      'https://github.com/jruizsilva/challenge-fullstack-alkemy',
    deploy:
      'https://challenge-fullstack-alkemy-six.vercel.app',
    techList: [
      {
        id: 1,
        title: 'html',
        svg: icons.html
      },
      {
        id: 2,
        title: 'css',
        svg: icons.css3
      },
      {
        id: 3,
        title: 'javascript',
        svg: icons.javascript
      },
      {
        id: 4,
        title: 'react',
        svg: icons.react
      },
      {
        id: 5,
        title: 'redux',
        svg: icons.redux
      },
      {
        id: 6,
        title: 'express',
        svg: icons.express
      },
      {
        id: 7,
        title: 'postgre',
        svg: icons.postgresql
      },
      {
        id: 8,
        title: 'sequelize',
        svg: icons.sequelize
      }
    ],
    overview: projects['html-css'].notfound,
    category: 'full-stack'
  }
]

export { projectList }
