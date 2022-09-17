import About from '../../components/about'
import Header from '../../components/header'
import Projects from '../../components/projects'

const Home = (): JSX.Element => {
  return (
    <div className='container'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default Home
