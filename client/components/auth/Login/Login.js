import React from 'react'
import {connect} from 'react-redux'
import { login } from '../../../redux/user'
import LocalLogin from './LocalLogin'
import GoogleLogin from './GoogleLogin'
import './Login.css'

const Login =(props)=> {
  const {handleSubmit} = props

    return (
      <section id='login-container'>
        <header id='login-header'>
          <h2>Welcome Back!</h2>
          <h4>Please enter info below to login</h4>
        </header>
        <LocalLogin handleSubmit={handleSubmit} />
        <GoogleLogin />
      </section>
    )
}

const mapDispatch =(dispatch, ownProps)=> {
  return{
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      console.log(`--> ${email} `, ` ----->PW ${password}`)
      dispatch(login({email,password}))
      .then(() => {
        ownProps.history.push('/home')
      })
    }
  }
}


export default connect(null, mapDispatch)(Login);




{/* <form id='login-form'
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
</form> */}
