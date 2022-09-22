import { icons } from '../../assets'
import useImageModal from '../../hooks/useImageModal'
import { Project } from '../../types'
import CardButtons from '../card-buttons'
import TechStack from '../tech-stack'

const ProjectScreenCard = (project: Project): JSX.Element => {
  const { title, description, github, deploy, techList, overview } = project

  const { isOpenImageModal, openImageModal, closeImageModal } = useImageModal()
  return (
    <>
      <div className='project screen'>
        <p className='project__p screen'>{description}</p>
        <TechStack techList={techList} />
        <div className='project__img-container' onClick={openImageModal}>
          <img className='project__img' src={overview} alt={title} />
        </div>
        <CardButtons github={github} deploy={deploy ?? ''} />
      </div>
      {isOpenImageModal && (
        <div className='project__overlay' onClick={closeImageModal}>
          <div className='project__modal' onClick={e => e.stopPropagation()}>
            <div className='project__img-container'>
              <img className='project__img' src={overview} alt={title} />
            </div>
            <button
              className='project__button--modal'
              onClick={closeImageModal}
            >
              <img src={icons.close} alt='close' />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectScreenCard
