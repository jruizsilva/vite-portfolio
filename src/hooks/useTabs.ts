import { useState } from 'react'

interface returnTabs {
  index: number
  showFullStackTab: () => void
  showFrontEndTab: () => void
  showHTMLCSSTab: () => void
}

const useTabs = (): returnTabs => {
  const [index, setIndex] = useState(1)

  const showFullStackTab = (): void => {
    setIndex(1)
  }
  const showFrontEndTab = (): void => {
    setIndex(2)
  }
  const showHTMLCSSTab = (): void => {
    setIndex(3)
  }

  return {
    index,
    showFullStackTab,
    showFrontEndTab,
    showHTMLCSSTab
  }
}

export default useTabs
