import React, { Component } from 'react'
import Login from '../auth/Login'
import Signup from '../auth/Signup'

export default class LoginTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id='flip-box'>
        <div className="flip-box-inner">
          <div className='flip-box-front'>
            <Login />
          </div>

          <div className='flip-card-back'>
            <Signup />
          </div>
        </div>
      </div>
    )
  }

}
