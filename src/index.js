import 'react-app-polyfill/ie9'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './styled'

const renderDom = document.getElementById('root')

const AppRender = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  )
}

ReactDOM.render(<AppRender />, renderDom)
