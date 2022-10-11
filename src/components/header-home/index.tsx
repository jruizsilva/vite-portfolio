import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { icons } from '../../assets'
import useResponsiveMenu from '../../hooks/useResponsiveMenu'
import { NavbarLink } from '../../types'
import { Anchor } from '../buttons'
import { navbarLinkList } from './const'

const headerVariants: Variants = {
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

const HeaderHome = (): JSX.Element => {
  const { isOpenMenu, toggleOpenMenu, closeMenu } =
    useResponsiveMenu()
  const { t, i18n } = useTranslation(['header'])

  const handleChangeLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newLanguage = e.target.value
    i18n.changeLanguage(newLanguage).catch(console.log)
  }

  return (
    <motion.header
      className={`header ${isOpenMenu ? 'open' : ''}`}
      variants={headerVariants}
    >
      <nav className='header__nav'>
        <ul
          className={`header__ul ${
            isOpenMenu ? 'open' : ''
          }`}
        >
          <li className='header__li'>
            <Anchor
              href='https://drive.google.com/file/d/1yp-r9G5Szopo6xplPYuTjtfetVerh7U_/view?usp=sharing'
              icon={icons.link}
              bg='transparent'
              border='#fff'
            >
              {t('header.button.cv')}
            </Anchor>
          </li>
          <ul className='header__ul--links'>
            {navbarLinkList.map(
              ({ id, href, name }: NavbarLink) => (
                <li key={id} className='header__li--links'>
                  <Link
                    className='header__a'
                    activeClass='header__a--active'
                    to={href}
                    onClick={closeMenu}
                    spy
                    smooth
                    offset={-82}
                  >
                    {t(`header.navlink.${name}`)}
                  </Link>
                </li>
              )
            )}
          </ul>
          <li className='header__li'>
            <select
              className='header__select'
              onChange={handleChangeLanguage}
              value={i18n.language}
            >
              <option className='header__option' value='en'>
                EN
              </option>
              <option className='header__option' value='es'>
                ES
              </option>
            </select>
          </li>
        </ul>
        <div
          className={`header__hamburger-menu ${
            isOpenMenu ? 'open' : ''
          }`}
          onClick={toggleOpenMenu}
        >
          <div className='header__bar-top'></div>
          <div className='header__bar-middle'></div>
          <div className='header__bar-bottom'></div>
        </div>
      </nav>
    </motion.header>
  )
}

export default HeaderHome
