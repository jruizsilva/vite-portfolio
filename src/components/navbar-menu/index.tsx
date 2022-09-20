import { useLocation } from 'react-router-dom'
import { icons } from '../../assets'

interface Props {
  showMenuIcon: boolean
}

const NavbarMenu = ({ showMenuIcon }: Props): JSX.Element => {
  const { hash } = useLocation()

  console.log(hash)

  return (
    <>
      <nav className='nav'>
        {showMenuIcon && <img src={icons.menu} alt='navbar menu' />}
        {!showMenuIcon && (
          <ul className='nav__ul'>
            <li
              className={`nav__li ${
                hash === '#about' ? 'nav__li--active' : ''
              }`}
            >
              <a className='nav__a' href='#about'>
                Sobre mí
              </a>
            </li>
            <li
              className={`nav__li ${
                hash === '#projects' ? 'nav__li--active' : ''
              }`}
            >
              <a className='nav__a' href='#projects'>
                Projectos
              </a>
            </li>
            <li
              className={`nav__li ${
                hash === '#contact' ? 'nav__li--active' : ''
              }`}
            >
              <a className='nav__a' href='#contact'>
                {' '}
                Contacto
              </a>
            </li>
          </ul>
        )}
      </nav>
      {!showMenuIcon && (
        <select>
          <option value='es'>ES</option>
          <option value='en'>EN</option>
        </select>
      )}
    </>
  )
}

export default NavbarMenu
