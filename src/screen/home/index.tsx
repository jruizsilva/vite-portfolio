import { useEffect } from 'react'
import About from '../../components/about'
import Projects from '../../components/projects'
import VerMas from '../../components/ver-mas'
import Contact from '../../components/contact'
import HeaderHome from '../../components/header-home'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setLoading } from '../../redux/slice/ui'
import Loader from '../../components/loader'

const HomeScreen = (): JSX.Element => {
  const { loading } = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()

  console.log(loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <HeaderHome />
          <div className='wrapper'>
            <About />
            <Projects title='Proyectos' limit={2} category='full-stack' />
            <VerMas />
            <Contact />
          </div>
        </>
      )}
    </>
  )
}

export default HomeScreen
