import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import NavbarMenu from '../navbar-menu'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <AnchorButton
        href='http://google.com'
        icon={icons.link}
        bg='transparent'
        border='#fff'
      >
        Descargar CV
      </AnchorButton>
      <NavbarMenu />
    </header>
  )
}

export default Header
