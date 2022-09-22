import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'
import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import useResponsiveMenu from '../../hooks/useResponsiveMenu'
import { NavLink } from 'react-router-dom'

const Header = (): JSX.Element => {
  const { isOpenMenu, toggleOpenMenu } = useResponsiveMenu()

  return (
    <header className={`header ${isOpenMenu ? 'open' : ''}`}>
      <nav className='header__nav'>
        <ul className={`header__ul ${isOpenMenu ? 'open' : ''}`}>
          <li className='header__li'>
            <AnchorButton
              href='http://google.com'
              icon={icons.link}
              bg='transparent'
              border='#fff'
            >
              Descargar CV
            </AnchorButton>
          </li>
          <ul className='header__ul--links'>
            {navbarLinkList.map(({ id, href, name, offset }: NavbarLink) => (
              <li key={id} className='header__li--links'>
                <NavLink
                  className='header__a'
                  to={href}
                  onClick={toggleOpenMenu}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <li className='header__li'>
            <select className='header__select'>
              <option className='header__option' value='es'>
                ES
              </option>
              <option className='header__option' value='en'>
                EN
              </option>
            </select>
          </li>
        </ul>
        <div
          className={`header__hamburger-menu ${isOpenMenu ? 'open' : ''}`}
          onClick={toggleOpenMenu}
        >
          <div className='header__bar-top'></div>
          <div className='header__bar-middle'></div>
          <div className='header__bar-bottom'></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
