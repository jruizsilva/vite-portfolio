import { motion } from 'framer-motion'
import { icons } from '../../assets'

const cardVariants = {
  initial: { opacity: 0, x: '500', scale: 0.2 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const AboutCard = (): JSX.Element => {
  return (
    <motion.div
      className='about-card'
      variants={cardVariants}
    >
      <h3 className='about-card__h3'>
        Objetivo profesional
      </h3>
      <p className='about-card__p'>
        Soy un Full-stack developer Javascript con 1 año de
        experiencia académica en el desarrollo de software.
        Busco insertarme en la industria IT y desarrollar
        mis habilidades en un ámbito profesional. Mi
        distingo por mi colaboración en trabajo en equipo y
        adaptabilidad a los cambios.
      </p>
      <ul className='about-card__ul'>
        <li className='about-card__li'>
          <a
            href='https://github.com/jruizsilva'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={icons.linkedin}
              alt='linkedin'
              title='Linkedin profile'
            />
          </a>
        </li>
        <li className='about-card__li'>
          <a
            href='https://www.linkedin.com/in/jruizsilva'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={icons.github}
              alt='github'
              title='Github profile'
            />
          </a>
        </li>
      </ul>
    </motion.div>
  )
}

export default AboutCard
