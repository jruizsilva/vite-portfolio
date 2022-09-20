import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import Footer from '../../components/footer'

const Home = (): JSX.Element => {
  return (
    <div className='container'>
      <About />
      <Projects />
      <VerMas />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
