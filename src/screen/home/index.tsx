import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import HeaderHome from '../../components/header-home'

const Home = (): JSX.Element => {
  return (
    <>
      <HeaderHome />
      <div className='container'>
        <About />
        <Projects />
        <VerMas />
        <Contact />
      </div>
    </>
  )
}

export default Home
