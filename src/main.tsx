import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Loader from './components/loader'
import './config/i18n'
import { store } from './redux/store'
import Router from './router'
import './styles/styles.scss'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
