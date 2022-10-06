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
          limit={2}
          category='full-stack'
          showTitle
        />
        <VerMas />
        <Contact />
      </div>
    </>
  )
}

export default HomeScreen
