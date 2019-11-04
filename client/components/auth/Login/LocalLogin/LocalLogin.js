import React, { Component } from 'react'

export default class LocalLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form id='login-form'
        onSubmit={handleSubmit}>
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
    )
  }
}
