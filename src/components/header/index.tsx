import Button from '../button'
import { icons } from '../../assets'
import NavbarMenu from '../navbar-menu'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <Button icon={icons.link} bg='transparent' border='#fff'>
        Descargar CV
      </Button>
      <NavbarMenu />
    </header>
  )
}

export default Header
