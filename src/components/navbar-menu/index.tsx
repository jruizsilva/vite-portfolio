import { Link } from 'react-scroll'
import { icons } from '../../assets'
import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'

interface Props {
  showMenuIcon: boolean
}

const NavbarMenu = ({ showMenuIcon }: Props): JSX.Element => {
  return (
    <>
      <nav className='nav'>
        {showMenuIcon && <img src={icons.menu} alt='navbar menu' />}
        {!showMenuIcon && (
          <ul className='nav__ul'>
            {navbarLinkList.map(({ id, href, name }: NavbarLink) => (
              <li key={id} className='nav__li'>
                <Link
                  className='nav__a'
                  activeClass='nav__a--active'
                  to={href}
                  spy
                  smooth
                  offset={-100}
                >
                  {name}
                </Link>
              </li>
            ))}
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
