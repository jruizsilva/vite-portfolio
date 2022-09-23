const Tabs = (): JSX.Element => {
  return (
    <div className='tabs'>
      <ul className='tabs__ul'>
        <li className='tabs__li tabs__li--active'>FULL-STACK</li>
        <li className='tabs__li'>FRONT-END</li>
        <li className='tabs__li'>HTML/CSS</li>
      </ul>
      <div className='tabs__content-container'>
        <div className='tabs__content tabs__content--active'>FULL-STACK</div>
        <div className='tabs__content'>FRONT-END</div>
        <div className='tabs__content'>HTML/CSS</div>
      </div>
    </div>
  )
}

export default Tabs
