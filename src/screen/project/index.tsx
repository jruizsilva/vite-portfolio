import { useLocation } from 'react-router-dom'
import Header from '../../components/header'
import ProjectScreenCard from '../../components/project-screen-card'

const ProjectScreen = (): JSX.Element => {
  const {
    state: { project }
  } = useLocation()

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='project-screen'>
          <h1 className='project-screen__h1'>{project.title}</h1>
          <ProjectScreenCard {...project} />
        </div>
      </div>
    </>
  )
}

export default ProjectScreen
