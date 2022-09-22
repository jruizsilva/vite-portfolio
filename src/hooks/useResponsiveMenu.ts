import { useState } from 'react'

interface returnResponsiveMenu {
  isOpenMenu: boolean
  toggleOpenMenu: () => void
}

const useResponsiveMenu = (): returnResponsiveMenu => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleOpenMenu = (): void => {
    setIsOpenMenu(!isOpenMenu)
  }

  return {
    isOpenMenu,
    toggleOpenMenu
  }
}

export default useResponsiveMenu
