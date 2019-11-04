import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, withRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/index'
import 'normalize.css'
import '../public/styles.css'
import App from './App'
import { getMe } from './redux/user'


const Main = withRouter(class extends Component {
  componentDidMount () {
    store.dispatch(getMe())
      .then(() => {
        this.props.history.push('/home')
      })
  }

  render () {
    return (
      <App />
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
  ,
  document.getElementById('App')
)
