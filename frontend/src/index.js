import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import { store } from './store'
import ConfigProvider from './antdTheme'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
)
