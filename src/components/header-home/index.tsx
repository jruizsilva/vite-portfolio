import { motion, Variants } from 'framer-motion'
import { Link } from 'react-scroll'
import { navbarLinkList } from './const'
import { NavbarLink } from '../../types'
import { AnchorButton } from '../buttons'
import { icons } from '../../assets'
import useResponsiveMenu from '../../hooks/useResponsiveMenu'

const itemVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1
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
      duration: 1,
      delay: 0.5
    }
  }
}

const HeaderHome = (): JSX.Element => {
  const { isOpenMenu, toggleOpenMenu, closeMenu } =
    useResponsiveMenu()

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
          <motion.li
            className='header__li'
            variants={itemVariants}
          >
            <AnchorButton
              href='http://google.com'
              icon={icons.link}
              bg='transparent'
              border='#fff'
            >
              Descargar CV
            </AnchorButton>
          </motion.li>
          <ul className='header__ul--links'>
            {navbarLinkList.map(
              ({ id, href, name, offset }: NavbarLink) => (
                <motion.li
                  key={id}
                  className='header__li--links'
                  variants={itemVariants}
                >
                  <Link
                    className='header__a'
                    activeClass='header__a--active'
                    to={href}
                    onClick={closeMenu}
                    spy
                    smooth
                    offset={offset}
                  >
                    {name}
                  </Link>
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
          initial='initial'
          animate='animate'
        >
          <div className='header__bar-top'></div>
          <div className='header__bar-middle'></div>
          <div className='header__bar-bottom'></div>
        </motion.div>
      </nav>
    </header>
  )
}

export default HeaderHome
