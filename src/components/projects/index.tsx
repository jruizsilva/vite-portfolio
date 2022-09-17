import { icons } from '../../assets'
import Button from '../button'

const Projects = (): JSX.Element => {
  return (
    <div className='projects'>
      <h2 className='projects__h2'>Projects</h2>
      <div className='projects__card'>
        <h3 className='projects__h3'>Marketplace App</h3>
        <p className='projects__p'>
          Soy un Full-stack developer Javascript con 1 año de experiencia
          académica en el desarrollo dedsa dsadsadsadsa dsad
        </p>
        <ul className='projects__ul'>
          <li className='projects__li'>
            <Button icon={icons.github_white} w='100%'>
              Ver repositorio
            </Button>
          </li>
          <li className='projects__li'>
            <Button
              icon={icons.globe}
              w='100%'
              text='#006cfa'
              border='#006cfa'
              bg='#fff'
            >
              Abrir deploy
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
