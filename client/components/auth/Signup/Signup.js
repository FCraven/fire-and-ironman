import React, { Component } from 'react'
import axios from 'axios'
import './Signup.css'
import { ErrMsg } from '../../util'


export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isEmailTaken: false,
      errMsg: '',
      isErrMsgVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeErrMsg = this.closeErrMsg.bind(this)
    // this.confirmPassword = this.confirmPassword.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const newUser = this.state
    const res = await axios.post('/auth/signup', newUser)

    if (res.status === 202) {
      this.setState({
        isEmailTaken: true,
        errMsg: res.data
      })
    }
    console.log(`STATE--->`, this.state)

  }

  closeErrMsg() {
    this.setState({
      isEmailTaken: false,
      email: ''
    })
  }

  // confirmPassword() {
  //   const password = this.state.password;
  //   const confirmPassword = this.state.confirmPassword;

  //   if (password !== confirmPassword) {
  //     this.setState({
  //       errMessage: 'Passwords do not match.'
  //     })
  //   } else {
  //     return true;
  //   }

  // }

  render() {
    return (
      <section id='signup-container' >

        <header id='signup-header'>
          SIGN UP
        </header>
        <hr id='signup-hr' />
        <form id='signup-form' onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name: </label>
          <input name='firstName'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder='First Name...'
            required />

          <label htmlFor='lastName'>Last Name: </label>
          <input name='lastName'
            type='text'
            value={this.state.lastName}
            onChange={this.handleChange} />

          <label htmlFor='email'>Email: </label>
          <input name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange} />

          <label htmlFor='password'>Password: </label>
          <input type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange} />

          {this.state.isEmailTaken ?
            <ErrMsg errMsg={this.state.errMsg}
              closeErrMsg={this.closeErrMsg} />
            : null}

          <label htmlFor='confirmPassword'>Confirm Password: </label>
          <input type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.handleChange} />


          <button type='submit'>Submit</button>

          <div>
            <h5>Already signed up?</h5>
            <div>Login Link</div>
          </div>
        </form>
      </section>
    )
  }
}

