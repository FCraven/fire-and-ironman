import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        Hellogin World
      </div>
    )
  }
}

