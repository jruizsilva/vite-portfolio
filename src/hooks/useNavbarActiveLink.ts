import { useLocation } from 'react-router-dom'
interface returnHook {
  addActiveClassName: (linkHash: string) => string
}

const useNavbarActiveLink = (): returnHook => {
  const { hash, pathname } = useLocation()

  const addActiveClassName = (linkHash: string): string => {
    if (hash !== linkHash) return ''
    if (pathname !== '/') return ''

    return 'nav__li--active'
  }

  return { addActiveClassName }
}

export default useNavbarActiveLink
