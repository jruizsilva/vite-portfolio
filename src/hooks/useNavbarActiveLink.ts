import { useLocation } from 'react-router-dom'

interface returnHook {
  addActiveClassName: (linkHash: string) => string
}

const useNavbarActiveLink = (): returnHook => {
  const { hash, pathname } = useLocation()

  const addActiveClassName = (linkHash: string): string => {
    console.log(hash, pathname)
    if (hash !== linkHash) return ''

    return 'nav__li--active'
  }

  return { addActiveClassName }
}

export default useNavbarActiveLink
