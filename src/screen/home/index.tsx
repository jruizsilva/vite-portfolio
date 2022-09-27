import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import HeaderHome from '../../components/header-home'

const HomeScreen = (): JSX.Element => {
  return (
    <>
      <HeaderHome />
      <div className='wrapper'>
        <About />
        <Projects
          title='Proyectos'
          limit={2}
          category='full-stack'
          custom={2}
        />
        <VerMas />
        <Contact />
      </div>
    </>
  )
}

export default HomeScreen
