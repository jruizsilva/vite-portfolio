import { Link } from 'react-scroll'
import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'
import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import { useState } from 'react'

const Header = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleOpenMenu = (): void => {
    setIsOpenMenu(!isOpenMenu)
  }
  console.log(isOpenMenu)

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
                <Link
                  className='header__a'
                  activeClass='header__a--active'
                  to={href}
                  spy
                  smooth
                  offset={offset}
                >
                  {name}
                </Link>
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
