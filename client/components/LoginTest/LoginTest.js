import React, { Component } from 'react'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import './LoginTest.css'
import './LoginTest.scss'

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
      <div className='flip-box'>
        <div className="flip-box-inner">
          <div className='flip-box-front'>
            <Login />
          </div>

          <div className='flip-box-back'>
            <Signup />
          </div>
        </div>
      </div>
    )
  }

}
