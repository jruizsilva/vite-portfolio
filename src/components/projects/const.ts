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
      'https://github.com/jruizsilva/my-team-page-devchallenges.io',
    deploy: 'https://devchallenges-project-2.netlify.app/',
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
    overview: projects['html-css'].team,
    category: 'html-css'
  },
  {
    id: 3,
    github:
      'https://github.com/jruizsilva/interior-consultant-devchallenges.io',
    deploy: 'https://devchallenges-project-3.netlify.app/',
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
    overview: projects['html-css'].interiorconsultant,
    category: 'html-css'
  },
  {
    id: 4,
    github:
      'https://github.com/jruizsilva/recipe-page-devchallenges.io',
    deploy: 'https://devchallenges-project-4.netlify.app/',
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
    overview: projects['html-css'].recipe,
    category: 'html-css'
  },
  {
    id: 5,
    github:
      'https://github.com/jruizsilva/my-gallery-devchallenges.io',
    deploy: 'https://devchallenges-project-5.netlify.app/',
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
    overview: projects['html-css'].mygallery,
    category: 'html-css'
  },
  {
    id: 6,
    github:
      'https://github.com/jruizsilva/checkout-page-devchallenges.io',
    deploy: 'https://devchellenges-project-6.netlify.app/',
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
    overview: projects['html-css'].checkout,
    category: 'html-css'
  },
  {
    id: 7,
    github:
      'https://github.com/jruizsilva/edie-homepage-devchallenges.io',
    deploy: 'https://devchallenges-project-7.netlify.app/',
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
    overview: projects['html-css'].ediehomepage,
    category: 'html-css'
  },
  {
    id: 8,
    github:
      'https://github.com/jruizsilva/portfolio-devchallenges.io',
    deploy: 'https://devchallenges-project-8.netlify.app/',
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
    overview: projects['html-css'].portfolio2021,
    category: 'html-css'
  }
]

const frontendList: projectListType = [
  {
    id: 1,
    github:
      'https://github.com/jruizsilva/button-component-devchallenges.io',
    deploy: 'https://devchallenges-react-1.netlify.app/',
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
    overview: projects['front-end'].button,
    category: 'front-end'
  },
  {
    id: 2,
    github:
      'https://github.com/jruizsilva/input-component-devchallenges.io',
    deploy: 'https://dev-challenges-react-2.netlify.app/',
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
    overview: projects['front-end'].input,
    category: 'front-end'
  }
]

const fullstackList: projectListType = [
  {
    id: 1,
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
    overview: projects['full-stack'].marketplace,
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
    overview: projects['full-stack'].myfinances,
    category: 'full-stack'
  },
  {
    id: 3,
    github:
      'https://github.com/jruizsilva/image-uploader-devchallenges.io',
    deploy:
      'https://image-uploader-devchallenges-io.vercel.app',
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
