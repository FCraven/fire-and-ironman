import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/index'
import 'normalize.css'
import '../public/styles.css'
import App from './App'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('App')
)
