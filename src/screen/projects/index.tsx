import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Tabs from '../../components/tabs'

const ProjectsScreen = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='projects-screen'>
          <SectionTitle>Mis proyectos</SectionTitle>
          <Tabs />
        </div>
      </div>
    </>
  )
}

export default ProjectsScreen
