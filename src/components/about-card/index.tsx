import {
  motion,
  Variants,
  useAnimationControls
} from 'framer-motion'
import { useEffect } from 'react'
import { icons } from '../../assets'

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.2
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const textVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: i => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: i * 0.5
    }
  })
}

const iconVariants: Variants = {
  initial: { opacity: 0 },
  animate: i => ({
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
      delay: i * 0.5
    }
  })
}

const AboutCard = (): JSX.Element => {
  const textControls = useAnimationControls()
  const iconControls = useAnimationControls()

  useEffect(() => {
    textControls.set(textVariants.initial)
    iconControls.set(iconVariants.initial)
  }, [])

  const handleOnCompleteCardAnimation = (): void => {
    textControls
      .start(textVariants.animate)
      .catch(console.log)
  }

  return (
    <motion.div
      className='about-card'
      variants={cardVariants}
      onAnimationComplete={handleOnCompleteCardAnimation}
    >
      <motion.h3
        className='about-card__h3'
        animate={textControls}
        custom={0}
      >
        Objetivo profesional
      </motion.h3>
      <motion.p
        className='about-card__p'
        animate={textControls}
        custom={1}
        onAnimationComplete={() => {
          iconControls
            .start(iconVariants.animate)
            .catch(console.log)
        }}
      >
        Soy un Full-stack developer Javascript con 1 año de
        experiencia académica en el desarrollo de software.
        Busco insertarme en la industria IT y desarrollar
        mis habilidades en un ámbito profesional. Mi
        distingo por mi colaboración en trabajo en equipo y
        adaptabilidad a los cambios.
      </motion.p>
      <ul className='about-card__ul'>
        <motion.li
          className='about-card__li'
          animate={iconControls}
          custom={0}
        >
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
        </motion.li>
        <motion.li
          className='about-card__li'
          animate={iconControls}
          custom={1}
        >
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
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default AboutCard
