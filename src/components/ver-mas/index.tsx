import { icons } from '../../assets'
import { NavLinkButton } from '../buttons'
import SectionTitle from '../section-title'

const VerMas = (): JSX.Element => {
  return (
    <div className='ver-mas'>
      <SectionTitle custom={1}>
        ¿Quieres ves más?
      </SectionTitle>
      <NavLinkButton
        to={'/projects'}
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
