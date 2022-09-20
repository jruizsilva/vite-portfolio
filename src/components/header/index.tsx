import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import NavbarMenu from '../navbar-menu'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <AnchorButton
          href='http://google.com'
          icon={icons.link}
          bg='transparent'
          border='#fff'
        >
          Descargar CV
        </AnchorButton>
        <NavbarMenu />
      </div>
    </header>
  )
}

export default Header
