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
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name] : value
  //   })
  // }

  // async handleSubmit (event) {
  //   event.preventDefault()
  //   const newUser = this.state
  //   const res = await axios.post('/auth/signup', newUser)
  //   console.log(res)
  //   //blah blah

  // }


  render() {
    return (
      <div>
        Hello from the SignUp component
      </div>
    )
  }
}

