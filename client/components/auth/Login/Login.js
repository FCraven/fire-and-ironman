import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <section id='login-container'>
        <header id='login-header'>
          <h2>Welcome Back!</h2>
          <h4>Please enter info below to login</h4>
        </header>
        <form id='login-form'
          onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input className='login-input'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required />

          <label htmlFor='password'>Password: </label>
          <input className='login-input'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required />


          <button id='login-button'
                  type='submit'>Submit</button>


        </form>
          <form method='get' action='/auth/google'>
            <button type='submit'>
                    Login with Google
            </button>
          </form>
      </section>
    )
  }
}

