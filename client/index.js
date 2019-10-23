import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/index'


ReactDOM.render(
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
  ,
  document.getElementById('App')
)
