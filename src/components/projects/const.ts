import { icons, projects } from '../../assets'
import { Project } from '../../types'

type projectListType = Project[]

interface ProjectsInterface {
  'html-css': projectListType
  'front-end': projectListType
  'full-stack': projectListType
}

const htmlcssList: projectListType = [
  {
    id: 1,
    github:
      'https://github.com/jruizsilva/404-not-found-devchallengs.io',
    deploy: 'https://devchallenges-project-1.netlify.app',
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
      }
    ],
    overview: projects['html-css'].notfound,
    category: 'html-css'
  },
  {
    id: 2,
    github:
      'https://github.com/jruizsilva/404-not-found-devchallengs.io',
    deploy: 'https://devchallenges-project-1.netlify.app',
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
      }
    ],
    overview: projects['html-css'].notfound,
    category: 'html-css'
  },
  {
    id: 3,
    github:
      'https://github.com/jruizsilva/404-not-found-devchallengs.io',
    deploy: 'https://devchallenges-project-1.netlify.app',
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
      }
    ],
    overview: projects['html-css'].notfound,
    category: 'html-css'
  }
]

const frontendList: projectListType = []

const fullstackList: projectListType = [
  {
    id: 1,
    deploy: 'https://e-commerce-labs.vercel.app',
    github: 'https://e-commerce-labs.vercel.app',
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
    overview: projects['full-stack'].marketplace,
    category: 'full-stack'
  },
  {
    id: 3,
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
    overview: projects['full-stack'].myfinances,
    category: 'full-stack'
  },
  {
    id: 2,
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
    overview: projects['full-stack'].uploadyourimages,
    category: 'full-stack'
  }
]

const projectList: ProjectsInterface = {
  'html-css': htmlcssList,
  'front-end': frontendList,
  'full-stack': fullstackList
}

export { projectList }
