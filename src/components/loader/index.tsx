const Loader = (): JSX.Element => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader__isometric'>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
          <div className='loader__box'></div>
        </div>
        <h3 className='loader__h3'>
          Loading<span className='loader__span'>...</span>
        </h3>
      </div>
    </div>
  )
}

export default Loader
