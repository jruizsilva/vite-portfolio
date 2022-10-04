import { useEffect, useState } from 'react'

interface returnBurgerMenu {
  showMenuIcon: boolean
}

const useShowMenuIcon = (): returnBurgerMenu => {
  const [showMenuIcon, setShowMenuIcon] = useState(
    window.innerWidth < 768
  )

  const resizeWindow = (): void => {
    if (window.innerWidth < 768) {
      setShowMenuIcon(true)
    } else {
      setShowMenuIcon(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  return { showMenuIcon }
}

export default useShowMenuIcon
