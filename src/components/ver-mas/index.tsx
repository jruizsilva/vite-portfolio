import { icons } from '../../assets'
import { NavLinkButton } from '../buttons'

const VerMas = (): JSX.Element => {
  return (
    <div className='ver-mas'>
      <h2 className='ver-mas__h2'>¿Quieres ves más?</h2>
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
