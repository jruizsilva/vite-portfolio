import { icons } from '../../assets'

const AboutCard = (): JSX.Element => {
  return (
    <div className='about-card'>
      <h3 className='about-card__h3'>Objetivo profesional</h3>
      <p className='about-card__p'>
        Soy un Full-stack developer Javascript con 1 año de experiencia
        académica en el desarrollo de software. Busco insertarme en la industria
        IT y desarrollar mis habilidades en un ámbito profesional. Mi distingo
        por mi colaboración en trabajo en equipo y adaptabilidad a los cambios.
      </p>
      <ul className='about-card__ul'>
        <li className='about-card__li'>
          <a
            href='https://github.com/jruizsilva'
            target='_blank'
            rel='noreferrer'
          >
            <img src={icons.linkedin} alt='linkedin' title='Linkedin profile' />
          </a>
        </li>
        <li className='about-card__li'>
          <a
            href='https://www.linkedin.com/in/jruizsilva'
            target='_blank'
            rel='noreferrer'
          >
            <img src={icons.github} alt='github' title='Github profile' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AboutCard
