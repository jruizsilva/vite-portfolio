import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import NavbarMenu from '../navbar-menu'
import useShowMenuIcon from '../../hooks/useBurgerMenu'

const Header = (): JSX.Element => {
  const { showMenuIcon } = useShowMenuIcon()

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

        <NavbarMenu showMenuIcon={showMenuIcon} />
      </div>
    </header>
  )
}

export default Header
