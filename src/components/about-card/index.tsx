import {
  motion,
  useAnimationControls,
  Variants
} from 'framer-motion'
import { useEffect } from 'react'
import { icons } from '../../assets'

const cardVariants = {
  initial: { opacity: 0, x: -50, scale: 0.2 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
}

const itemVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: i => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: i * 0.5
    }
  })
}

const AboutCard = (): JSX.Element => {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.set(itemVariants.initial)
  }, [])

  const handleOnCompleteAnimation = (): void => {
    controls.start(itemVariants.animate).catch(console.log)
  }

  return (
    <motion.div
      className='about-card'
      variants={cardVariants}
      onAnimationComplete={handleOnCompleteAnimation}
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
          <motion.a
            href='https://github.com/jruizsilva'
            target='_blank'
            rel='noreferrer'
            animate={controls}
            custom={0}
          >
            <img
              src={icons.linkedin}
              alt='linkedin'
              title='Linkedin profile'
            />
          </motion.a>
        </li>
        <li className='about-card__li'>
          <motion.a
            href='https://www.linkedin.com/in/jruizsilva'
            target='_blank'
            rel='noreferrer'
            animate={controls}
            custom={1}
          >
            <img
              src={icons.github}
              alt='github'
              title='Github profile'
            />
          </motion.a>
        </li>
      </ul>
    </motion.div>
  )
}

export default AboutCard
