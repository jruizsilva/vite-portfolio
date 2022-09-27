import { motion, Variants } from 'framer-motion'
import AboutCard from '../about-card'
import SectionTitle from '../section-title'

const variants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3
    }
  })
}

const About = (): JSX.Element => {
  return (
    <div className='about' id='about'>
      <motion.h1
        className='about__h1'
        variants={variants}
        initial='initial'
        whileInView='animate'
        custom={1}
      >
        Bienvenido! <br />
        Soy Jonathan
        <br />
        <strong className='about__strong'>
          Desarrollador Full-Stack
        </strong>
      </motion.h1>
      <SectionTitle custom={2} viewportMargin='0px'>
        About me
      </SectionTitle>
      <AboutCard />
    </div>
  )
}

export default About
