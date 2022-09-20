import AboutCard from '../about-card'

const About = (): JSX.Element => {
  return (
    <div className='about' id='about'>
      <h1 className='about__h1'>
        Bienvenido! <br />
        Soy Jonathan
        <br />
        <strong className='about__strong'>Desarrollador Full-Stack</strong>
      </h1>
      <h2 className='about__h2'>About me</h2>
      <AboutCard />
    </div>
  )
}

export default About
