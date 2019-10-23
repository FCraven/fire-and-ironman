import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/index'
import 'normalize.css'
import '../public/styles.css'


ReactDOM.render(
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
  ,
  document.getElementById('App')
)
