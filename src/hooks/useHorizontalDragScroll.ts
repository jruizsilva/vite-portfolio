import { useRef, useEffect } from 'react'

const useHorizontalDragScroll =
  (): React.RefObject<HTMLUListElement> => {
    const ulRef = useRef<HTMLUListElement>(null)
    let isDown = false
    let startX: number
    let scrollLeft: number

    useEffect(() => {
      const onClickPress = (e: MouseEvent): void => {
        isDown = true
        if (ulRef.current !== null) {
          ulRef.current.style.cursor = 'grabbing'
          startX = e.pageX - ulRef.current.offsetLeft
          scrollLeft = ulRef.current.scrollLeft
        }
      }
      const onMouseLeaveOrUp = (e: MouseEvent): void => {
        isDown = false
        if (ulRef.current !== null) {
          ulRef.current.style.cursor = 'grab'
        }
      }
      const onMousePressAndMove = (e: MouseEvent): void => {
        if (!isDown) return
        e.preventDefault()
        if (ulRef.current !== null) {
          const x = e.pageX - ulRef.current.offsetLeft
          const walk = x - startX
          ulRef.current.scrollLeft = scrollLeft - walk
        }
      }

      if (ulRef.current !== null) {
        ulRef.current.addEventListener(
          'mousedown',
          onClickPress
        )
        ulRef.current.addEventListener(
          'mouseleave',
          onMouseLeaveOrUp
        )
        ulRef.current.addEventListener(
          'mouseup',
          onMouseLeaveOrUp
        )
        ulRef.current.addEventListener(
          'mousemove',
          onMousePressAndMove
        )
      }

      return () => {
        if (ulRef.current !== null) {
          ulRef.current.removeEventListener(
            'mousedown',
            onClickPress
          )
          ulRef.current.removeEventListener(
            'mouseleave',
            onMouseLeaveOrUp
          )
          ulRef.current.removeEventListener(
            'mouseup',
            onMouseLeaveOrUp
          )
          ulRef.current.removeEventListener(
            'mousemove',
            onMousePressAndMove
          )
        }
      }
    }, [])
    return ulRef
  }

export default useHorizontalDragScroll
