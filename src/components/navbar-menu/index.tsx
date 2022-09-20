import { icons } from '../../assets'
import useNavbarActiveLink from '../../hooks/useNavbarActiveLink'
import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'

interface Props {
  showMenuIcon: boolean
}

const NavbarMenu = ({ showMenuIcon }: Props): JSX.Element => {
  const { addActiveClassName } = useNavbarActiveLink()

  return (
    <>
      <nav className='nav'>
        {showMenuIcon && <img src={icons.menu} alt='navbar menu' />}
        {!showMenuIcon && (
          <ul className='nav__ul'>
            {navbarLinkList.map(({ id, href, name }: NavbarLink) => (
              <li key={id} className={`nav__li ${addActiveClassName(href)}`}>
                <a className='nav__a' href={href}>
                  {name}
                </a>
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
