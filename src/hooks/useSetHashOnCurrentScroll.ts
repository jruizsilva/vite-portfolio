import { useEffect } from 'react'

const setCurrentHash = (scrollY: number): void => {
  if (scrollY < 582) {
    window.location.hash = '#about'
  } else if (scrollY >= 582 && scrollY < 1117) {
    window.location.hash = '#projects'
  } else if (scrollY >= 1117) {
    window.location.hash = '#contact'
  }
}

const useSetHashOnCurrentScroll = (): void => {
  useEffect(() => {
    let scrollY = window.scrollY

    const scrollHandler = (): void => {
      scrollY = window.scrollY
      setCurrentHash(scrollY)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
}

export default useSetHashOnCurrentScroll
