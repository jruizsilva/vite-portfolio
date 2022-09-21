import { Link } from 'react-scroll'
import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'
import { AnchorButton } from '../buttons'
import { icons } from '../../assets'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <nav className='header__nav'>
          <AnchorButton
            href='http://google.com'
            icon={icons.link}
            bg='transparent'
            border='#fff'
          >
            Descargar CV
          </AnchorButton>
          <ul className='header__ul'>
            {navbarLinkList.map(({ id, href, name, offset }: NavbarLink) => (
              <li key={id} className='header__li'>
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
          <img className='header__img' src={icons.menu} alt='navbar menu' />
        </nav>
      </div>
    </header>
  )
}

export default Header
