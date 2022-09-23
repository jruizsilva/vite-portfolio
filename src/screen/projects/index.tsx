import Header from '../../components/header'
import Tabs from '../../components/tabs'

const ProjectsScreen = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='projects-screen'>
          <h2 className='projects-screen__h2'>Mis proyectos</h2>
          <Tabs />
        </div>
      </div>
    </>
  )
}

export default ProjectsScreen
