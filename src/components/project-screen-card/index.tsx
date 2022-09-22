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
        <div className='project__img-container border' onClick={openImageModal}>
          <img className='project__img border' src={overview} alt={title} />
        </div>
        <CardButtons github={github} deploy={deploy ?? ''} />
      </div>
      {isOpenImageModal && (
        <div className='project__overlay' onClick={closeImageModal}>
          <div
            className='project__modal image'
            onClick={e => e.stopPropagation()}
          >
            <div className='project__img-container'>
              <img className='project__img modal' src={overview} alt={title} />
            </div>
          </div>
          <button className='project__button--modal' onClick={closeImageModal}>
            <img src={icons.close_white} alt='close' />
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectScreenCard
