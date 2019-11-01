import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './Signup.css'
// import { ErrMsg } from '../../util'
import { NavLink } from 'react-router-dom'


export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isEmailTaken: false,
      errMsg: '',
      isErrMsgVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.closeErrMsg = this.closeErrMsg.bind(this)
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

  // closeErrMsg() {
  //   this.setState({
  //     isEmailTaken: false,
  //     email: ''
  //   })
  // }

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
          Sign Up
        </header>
        <hr id='signup-hr' />
        <form id='signup-form' onSubmit={this.handleSubmit}>
          <label htmlFor='name'>First Name: </label>
          <input name='name'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange}
            required />

          <label htmlFor='email'>Email: </label>
          <input name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required />

          <label htmlFor='password'>Password: </label>
          <input type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required />
{/*
          {this.state.isEmailTaken &&
            <ErrMsg errMsg={this.state.errMsg}
              closeErrMsg={this.closeErrMsg} />} */}

          {/* {this.state.password.length > 0 &&
            <Fragment>
              <label htmlFor='confirmPassword'>Confirm Password: </label>
              <input type='password'
                name='confirmPassword'
                value={this.state.confirmPassword}
                onChange={this.handleChange} />
            </Fragment>} */}

          <button id='signup-button'
            type='submit'>Submit
          </button>

          <nav id='signup-redirect'>
            <h5>Already signed up?
              <NavLink to='/auth/login'>Login</NavLink>
            </h5>
          </nav>
        </form>
      </section>
    )
  }
}

