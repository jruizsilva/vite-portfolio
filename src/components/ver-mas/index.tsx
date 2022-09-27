import { useNavigate } from 'react-router-dom'
import { icons } from '../../assets'
import { NavLinkButton } from '../buttons'
import SectionTitle from '../section-title'

const VerMas = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className='ver-mas'>
      <SectionTitle>¿Quieres ves más?</SectionTitle>
      <NavLinkButton
        onClick={() => navigate('/projects')}
        bg='transparent'
        border='#fff'
        icon={icons.link}
      >
        Click aquí
      </NavLinkButton>
    </div>
  )
}

export default VerMas
