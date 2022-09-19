import { useRef, useEffect } from 'react'

const useHorizontalDragScroll = (): React.RefObject<HTMLUListElement> => {
  const ulRef = useRef<HTMLUListElement>(null)
  // let isDown = false
  // let startX
  // let scrollLeft

  useEffect(() => {
    if (ulRef.current !== null) {
      console.log(ulRef)
      ulRef.current.addEventListener('mousedown', e => {})
      ulRef.current.addEventListener('mouseleave', e => {})
      ulRef.current.addEventListener('mouseup', e => {})
      ulRef.current.addEventListener('mousemove', e => {})
    }

    return () => {}
  }, [])
  return ulRef
}

export default useHorizontalDragScroll
