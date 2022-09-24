import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Router from './router'
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom'

const theme = {
  bg: '#3870ba',
  white: '#fff',
  black: '#000',
  btn: '#006cfa',
  'card-title': '#004bad'
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
