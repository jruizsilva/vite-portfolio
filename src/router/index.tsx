import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import Home from '../screen/home'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

const Router = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
