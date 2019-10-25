import React, { Component } from 'react'
import axios from 'axios'

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  async handleSubmit (event) {
    event.preventDefault()
    const newUser = this.state
    const res = await axios.post('/auth/signup', newUser)
    console.log(res)
  }


  render() {
    return (
      <div>
        <div>
          SIGN UP
        </div>
        <form onSubmit={this.handleSubmit}
              style={{display: 'flex',
                      flexFlow: 'column nowrap',
                      justifyContent: 'center',
                      alignItems: 'center'}}>

        <label htmlFor='firstName'>First Name: </label>
          <input  name='firstName'
                  type='text'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder='First Name...'
                  required />

        <label htmlFor='lastName'>Last Name: </label>
          <input  name='lastName'
                  type='text'
                  value={this.state.lastName}
                  onChange={this.handleChange} />

          <label htmlFor='email'>Email: </label>
          <input  name='email'
                  type='email'
                  value={this.state.email}
                  onChange={this.handleChange} />

          <label htmlFor='password'>Password: </label>
          <input  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange} />

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

