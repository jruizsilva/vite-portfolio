import { icons } from '../../assets'
import { Project } from '../../types'

const projectList: Project[] = [
  {
    id: 1,
    title: 'Marketplace App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo dedsa dsadsadsadsa dsad',
    to: '/project/1',
    github: 'https://github.com/jruizsilva/e-commerce-labs',
    deploy: 'https://e-commerce-labs.vercel.app',
    techList: [
      { id: 1, name: 'html', svg: icons.html },
      { id: 2, name: 'css3', svg: icons.css3 },
      { id: 3, name: 'javascript', svg: icons.javascript },
      { id: 4, name: 'react', svg: icons.react },
      { id: 5, name: 'redux', svg: icons.redux },
      { id: 6, name: 'express', svg: icons.express },
      { id: 7, name: 'postgresql', svg: icons.postgresql },
      { id: 8, name: 'sequelize', svg: icons.sequelize }
    ]
  },
  {
    id: 2,
    title: 'Finances App',
    description:
      'Soy un Full-stack developer Javascript con 1 año de experiencia académica en el desarrollo dedsa dsadsadsadsa dsad',
    to: '/project/2',
    github: 'https://github.com/jruizsilva/challenge-fullstack-alkemy',
    deploy: 'https://challenge-fullstack-alkemy-six.vercel.app',
    techList: [
      { id: 1, name: 'html', svg: icons.html },
      { id: 2, name: 'css3', svg: icons.css3 },
      { id: 3, name: 'javascript', svg: icons.javascript },
      { id: 4, name: 'react', svg: icons.react },
      { id: 5, name: 'redux', svg: icons.redux },
      { id: 6, name: 'express', svg: icons.express },
      { id: 7, name: 'postgresql', svg: icons.postgresql },
      { id: 8, name: 'sequelize', svg: icons.sequelize }
    ]
  }
]

export { projectList }
