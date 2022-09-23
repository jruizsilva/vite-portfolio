import { useState } from 'react'

const Tabs = (): JSX.Element => {
  const [index, setIndex] = useState(1)

  const changeCurrentIndex = (newIndex: number): void => {
    setIndex(newIndex)
  }

  return (
    <div className='tabs'>
      <ul className='tabs__ul'>
        <li
          className='tabs__li tabs__li--active'
          onClick={() => changeCurrentIndex(1)}
        >
          FULL-STACK
        </li>
        <li className='tabs__li' onClick={() => changeCurrentIndex(2)}>
          FRONT-END
        </li>
        <li className='tabs__li' onClick={() => changeCurrentIndex(3)}>
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
