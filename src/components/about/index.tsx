import { motion, Variants } from 'framer-motion'
import AboutCard from '../about-card'
import SectionTitle from '../section-title'

const titleVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5
    }
  }
}

const About = (): JSX.Element => {
  return (
    <div className='about' id='about'>
      <motion.h1
        className='about__h1'
        variants={titleVariants}
      >
        Bienvenido! <br />
        Soy Jonathan
        <br />
        <strong className='about__strong'>
          Desarrollador Full-Stack
        </strong>
      </motion.h1>
      <SectionTitle>About me</SectionTitle>
      <AboutCard />
    </div>
  )
}

export default About
