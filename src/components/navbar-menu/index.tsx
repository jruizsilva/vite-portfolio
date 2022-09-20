import { icons } from '../../assets'
import useShowMenuIcon from '../../hooks/useBurgerMenu'

const NavbarMenu = (): JSX.Element => {
  const { showMenuIcon } = useShowMenuIcon()

  console.log(showMenuIcon)

  return (
    <nav className='nav'>
      {showMenuIcon && <img src={icons.menu} alt='navbar menu' />}
      {!showMenuIcon && (
        <ul className='nav__ul'>
          <li className='nav__li'>
            <a className='nav__a' href='#about'>
              Sobre mí
            </a>
          </li>
          <li className='nav__li'>
            <a className='nav__a' href='#projects'>
              Projectos
            </a>
          </li>
          <li className='nav__li'>
            <a className='nav__a' href='#contact'>
              {' '}
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavbarMenu
