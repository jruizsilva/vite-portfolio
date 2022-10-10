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
      'https://github.com/jruizsilva/checkout-page-devchallenges.io',
    deploy: 'https://devchallenges-project-6.netlify.app',
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
    id: 2,
    github:
      'https://github.com/jruizsilva/documentation-page',
    deploy:
      'https://jruizsilva-documentation-page.netlify.app',
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
    overview: projects['html-css'].documentation,
    category: 'html-css'
  },
  {
    id: 3,
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
    id: 4,
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
    overview: projects['html-css'].gallery,
    category: 'html-css'
  },
  {
    id: 5,
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
    id: 6,
    github: 'https://github.com/jruizsilva/landing-page',
    deploy: 'https://jruizsilva-landing-page.netlify.app/',
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
    overview: projects['html-css'].landingpage,
    category: 'html-css'
  },
  {
    id: 7,
    github:
      'https://github.com/jruizsilva/404-not-found-devchallengs.io',
    deploy: 'https://devchallenges-project-1.netlify.app/',
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
    id: 8,
    github:
      'https://github.com/jruizsilva/personal-portfolio-webpage',
    deploy: 'https://jruizsilva.netlify.app/',
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
    overview: projects['html-css'].billieporfolio,
    category: 'html-css'
  },
  {
    id: 9,
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
    id: 10,
    github: 'https://github.com/jruizsilva/survey-form',
    deploy: 'https://jruizsilva-survey-form.netlify.app/',
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
    overview: projects['html-css'].surveyform,
    category: 'html-css'
  },
  {
    id: 11,
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
    id: 12,
    github: 'https://github.com/jruizsilva/tribute-page',
    deploy: 'https://jruizsilva-tribute-page.netlify.app/',
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
    overview: projects['html-css'].tribute,
    category: 'html-css'
  },
  {
    id: 13,
    github:
      'https://github.com/jruizsilva/blog-de-viajes-curso',
    deploy: 'https://angry-easley-d5a70b.netlify.app/',
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
    overview: projects['html-css'].travelsblog,
    category: 'html-css'
  },
  {
    id: 14,
    github:
      'https://github.com/jruizsilva/personal-portfolio-webpage',
    deploy: 'https://jruizsilva.netlify.app/',
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
      'https://github.com/jruizsilva/breaking-bad-app',
    deploy: 'https://curso-practico-react-2.netlify.app/',
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
    overview: projects['front-end'].breakingbad,
    category: 'front-end'
  },
  {
    id: 2,
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
    id: 3,
    github: 'https://github.com/jruizsilva/cms-indexeddb',
    deploy: 'https://js-moderno-project-8.netlify.app/',
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
    overview: projects['front-end'].clientadmin,
    category: 'front-end'
  },
  {
    id: 4,
    github: 'https://github.com/jruizsilva/dog-app',
    deploy: 'https://curso-practico-react-3.netlify.app/',
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
    overview: projects['front-end'].crudindexeddb,
    category: 'front-end'
  },
  {
    id: 5,
    github: 'https://github.com/jruizsilva/dog-app',
    deploy: 'https://curso-practico-react-3.netlify.app/',
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
    overview: projects['front-end'].dogs,
    category: 'front-end'
  },
  {
    id: 6,
    github: 'https://github.com/jruizsilva/ejercicios-dom',
    deploy: 'https://curso-js-jonmircha-dom.netlify.app/',
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
    overview: projects['front-end'].domexercices,
    category: 'front-end'
  },
  {
    id: 7,
    github: 'https://github.com/jruizsilva/validar-email',
    deploy: 'https://js-moderno-project-2.netlify.app/',
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
    overview: projects['front-end'].formvalidation,
    category: 'front-end'
  },
  {
    id: 8,
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
    overview: projects['front-end'].foxnine,
    category: 'front-end'
  },
  {
    id: 9,
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
  },
  {
    id: 10,
    github:
      'https://github.com/jruizsilva/lista-tareas-local-storage',
    deploy: 'https://jnt-project-1.netlify.app/',
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
    overview: projects['front-end'].localstorage,
    category: 'front-end'
  },
  {
    id: 11,
    github:
      'https://github.com/jruizsilva/movie-list-with-use-context',
    deploy:
      'https://movie-list-with-use-context.netlify.app/',
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
    overview: projects['front-end'].movielist,
    category: 'front-end'
  },
  {
    id: 12,
    github: 'https://github.com/jruizsilva/miListaAnime',
    deploy: 'https://jnt-project-3.netlify.app/',
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
    overview: projects['front-end'].myanimelist,
    category: 'front-end'
  },
  {
    id: 13,
    github: 'https://github.com/jruizsilva/pokeList',
    deploy: 'https://jruizsilva-pokelist.netlify.app/',
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
    overview: projects['front-end'].pokelist,
    category: 'front-end'
  },
  {
    id: 14,
    github: 'https://github.com/jruizsilva/vite-portfolio',
    deploy: 'https://vite-portfolio-jruizsilva.vercel.app/',
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
    overview: projects['front-end'].portfolio2022,
    category: 'front-end'
  },
  {
    id: 15,
    github:
      'https://github.com/jruizsilva/cotizador-seguro-prototype',
    deploy: 'https://js-moderno-project-5.netlify.app/',
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
    overview: projects['front-end'].quoteinsurance,
    category: 'front-end'
  },
  {
    id: 16,
    github:
      'https://github.com/jruizsilva/random-quote-machine',
    deploy:
      'https://jruizsilva-random-quote-machine.netlify.app/',
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
    overview: projects['front-end'].randomquotemachine,
    category: 'front-end'
  },
  {
    id: 17,
    github: 'https://github.com/jruizsilva/buscador-autos',
    deploy: 'https://js-moderno-project-3.netlify.app/',
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
    overview: projects['front-end'].carsearcher,
    category: 'front-end'
  },
  {
    id: 18,
    github: 'https://github.com/jruizsilva/lyrics',
    deploy: 'https://js-moderno-project-10.netlify.app/',
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
    overview: projects['front-end'].songsearcher,
    category: 'front-end'
  },
  {
    id: 19,
    github:
      'https://github.com/jruizsilva/lista-tareas-local-storage',
    deploy: 'https://jnt-project-1.netlify.app/',
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
    overview: projects['front-end'].todoapp,
    category: 'front-end'
  },
  {
    id: 20,
    github: 'https://github.com/jruizsilva/react-todo-app',
    deploy: 'https://curso-practico-react-1.netlify.app/',
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
    overview: projects['front-end'].todoapp2,
    category: 'front-end'
  },
  {
    id: 21,
    github:
      'https://github.com/jruizsilva/veterinaria-administrador',
    deploy: 'https://js-moderno-project-7.netlify.app/',
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
    overview: projects['front-end'].veterinary,
    category: 'front-end'
  },
  {
    id: 22,
    github: 'https://github.com/jruizsilva/clima',
    deploy: 'https://js-moderno-project-9.netlify.app/',
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
    overview: projects['front-end'].weather,
    category: 'front-end'
  },
  {
    id: 23,
    github: 'https://github.com/jruizsilva/gasto-semanal',
    deploy: 'https://js-moderno-project-6.netlify.app/',
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
    overview: projects['front-end'].weeklyexpense,
    category: 'front-end'
  },
  {
    id: 24,
    github: 'https://github.com/jruizsilva/carrito-cursos',
    deploy: 'https://js-moderno-project-1.netlify.app/',
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
    overview: projects['front-end'].universidad,
    category: 'html-css'
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
    overview: projects['full-stack'].finances,
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
    overview: projects['full-stack'].uploadimages,
    category: 'full-stack'
  },
  {
    id: 4,
    github:
      'https://github.com/jruizsilva/chat-group-devchallenges.io',
    deploy: 'https://chat-group-devchallenges.vercel.app/',
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
    overview: projects['full-stack'].chat,
    category: 'full-stack'
  },
  {
    id: 5,
    github: 'https://github.com/jruizsilva/countries-pi',
    deploy: 'https://countries-pi-jruizsilva.vercel.app/',
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
    overview: projects['full-stack'].countriespi,
    category: 'full-stack'
  }
]

const projectList: ProjectsInterface = {
  'html-css': htmlcssList,
  'front-end': frontendList,
  'full-stack': fullstackList
}

export { projectList }
