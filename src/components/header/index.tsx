import { motion, Variants } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { icons } from '../../assets'
import useResponsiveMenu from '../../hooks/useResponsiveMenu'
import { NavbarLink } from '../../types'
import { AnchorButton } from '../buttons'
import { navbarLinkList } from './const'

const itemVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4
    }
  }
}

const menuVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 0.5
    }
  }
}

const Header = (): JSX.Element => {
  const { isOpenMenu, toggleOpenMenu } = useResponsiveMenu()
  const { pathname } = useLocation()

  return (
    <header
      className={`header ${isOpenMenu ? 'open' : ''}`}
    >
      <nav className='header__nav'>
        <ul
          className={`header__ul ${
            isOpenMenu ? 'open' : ''
          }`}
        >
          <li className='header__li'>
            <AnchorButton
              href='http://google.com'
              icon={icons.link}
              bg='transparent'
              border='#fff'
              variants={itemVariants}
            >
              Descargar CV
            </AnchorButton>
          </li>
          <ul className='header__ul--links'>
            {navbarLinkList.map(
              ({ id, href }: NavbarLink) => (
                <motion.li
                  key={id}
                  className='header__li--links'
                  variants={itemVariants}
                >
                  <NavLink
                    className={`header__a ${
                      pathname === '/projects' &&
                      href === pathname
                        ? 'header__a--active'
                        : ''
                    } `}
                    to={href}
                    onClick={toggleOpenMenu}
                  >
                    fix me
                  </NavLink>
                </motion.li>
              )
            )}
          </ul>

          <motion.li
            className='header__li'
            variants={itemVariants}
          >
            <select className='header__select'>
              <option className='header__option' value='es'>
                ES
              </option>
              <option className='header__option' value='en'>
                EN
              </option>
            </select>
          </motion.li>
        </ul>
        <motion.div
          className={`header__hamburger-menu ${
            isOpenMenu ? 'open' : ''
          }`}
          onClick={toggleOpenMenu}
          variants={menuVariants}
        >
          <div className='header__bar-top'></div>
          <div className='header__bar-middle'></div>
          <div className='header__bar-bottom'></div>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header
