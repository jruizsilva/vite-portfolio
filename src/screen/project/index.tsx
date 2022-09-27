import { useLocation } from 'react-router-dom'
import Header from '../../components/header'
import ProjectScreenCard from '../../components/project-screen-card'
import SectionTitle from '../../components/section-title'

const ProjectScreen = (): JSX.Element => {
  const {
    state: { project }
  } = useLocation()

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='project-screen'>
          <SectionTitle custom={1} viewportMargin='0px'>
            {project.title}
          </SectionTitle>
          <ProjectScreenCard {...project} />
        </div>
      </div>
    </>
  )
}

export default ProjectScreen
