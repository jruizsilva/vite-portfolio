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
          <h2 className='project-screen__h2'>{project.title}</h2>
          <ProjectScreenCard {...project} />
        </div>
      </div>
    </>
  )
}

export default ProjectScreen
