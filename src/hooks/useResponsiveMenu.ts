import { useEffect, useState } from 'react'

interface returnResponsiveMenu {
  isOpenMenu: boolean
  toggleOpenMenu: () => void
  openMenu: () => void
  closeMenu: () => void
}

const useResponsiveMenu = (): returnResponsiveMenu => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleOpenMenu = (): void => {
    setIsOpenMenu(!isOpenMenu)
  }
  const openMenu = (): void => {
    setIsOpenMenu(true)
  }
  const closeMenu = (): void => {
    setIsOpenMenu(false)
  }

  const handleResize = (): void => {
    if (window.innerWidth >= 768 && isOpenMenu) {
      closeMenu()
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpenMenu])

  return {
    isOpenMenu,
    toggleOpenMenu,
    openMenu,
    closeMenu
  }
}

export default useResponsiveMenu
