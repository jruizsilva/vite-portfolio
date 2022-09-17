import { icons } from '../../assets'

const About = (): JSX.Element => {
  return (
    <div className='about'>
      <h1 className='about__h1'>
        Bienvenido! <br />
        Soy Jonathan
        <br />
        <strong className='about__strong'>Desarrollador Full-Stack</strong>
      </h1>
      <div className='about__section'>
        <h2 className='about__h2'>About me</h2>
        <div className='about__card'>
          <h3 className='about__h3'>Objetivo profesional</h3>
          <p className='about__p'>
            Soy un Full-stack developer Javascript con 1 año de experiencia
            académica en el desarrollo de software. Busco insertarme en la
            industria IT y desarrollar mis habilidades en un ámbito profesional.
            Mi distingo por mi colaboración en trabajo en equipo y adaptabilidad
            a los cambios.
          </p>
          <ul className='about__ul'>
            <li className='about__li'>
              <img className='about__img' src={icons.linkedin} alt='linkedin' />
            </li>
            <li className='about__li'>
              <img className='about__img' src={icons.github} alt='github' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
