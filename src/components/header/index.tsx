import Button from '../button'
import { icons } from '../../assets'
import NavbarMenu from '../navbar-menu'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <Button outline icon={icons.link}>
        Descargar CV
      </Button>
      <NavbarMenu />
    </header>
  )
}

export default Header
