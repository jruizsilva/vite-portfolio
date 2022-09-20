import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface returnHook {
  addActiveClassName: (linkHash: string) => string
}

const setCurrentHash = (scrollY: number): void => {
  if (scrollY < 582) {
    window.location.hash = '#about'
  } else if (scrollY >= 582 && scrollY < 1117) {
    window.location.hash = '#projects'
  } else if (scrollY >= 1117) {
    window.location.hash = '#contact'
  }
}

const useNavbarActiveLink = (): returnHook => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    let scrollY = window.scrollY
    setCurrentHash(scrollY)

    const scrollHandler = (): void => {
      scrollY = window.scrollY
      setCurrentHash(scrollY)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const addActiveClassName = (linkHash: string): string => {
    if (hash !== linkHash) return ''
    if (pathname !== '/') return ''

    return 'nav__li--active'
  }

  return { addActiveClassName }
}

export default useNavbarActiveLink
