import useTabs from '../../hooks/useTabs'

const Tabs = (): JSX.Element => {
  const { index, showFullStackTab, showFrontEndTab, showHTMLCSSTab } = useTabs()

  return (
    <div className='tabs'>
      <ul className='tabs__ul'>
        <li className='tabs__li tabs__li--active' onClick={showFullStackTab}>
          FULL-STACK
        </li>
        <li className='tabs__li' onClick={showFrontEndTab}>
          FRONT-END
        </li>
        <li className='tabs__li' onClick={showHTMLCSSTab}>
          HTML/CSS
        </li>
      </ul>
      <div className='tabs__content-container'>
        <div
          className={`tabs__content ${
            index === 1 ? 'tabs__content--active' : ''
          }`}
        >
          FULL-STACK
        </div>
        <div
          className={`tabs__content ${
            index === 2 ? 'tabs__content--active' : ''
          }`}
        >
          FRONT-END
        </div>
        <div
          className={`tabs__content ${
            index === 3 ? 'tabs__content--active' : ''
          }`}
        >
          HTML/CSS
        </div>
      </div>
    </div>
  )
}

export default Tabs
