import React, {Component} from 'react'

export default class LoginTest extends Component {

  constructor(props){
    super(props)
    this.state= {
      isFlipped: false
    }
  }

  componentDidMount(){

  }

  render(){
    const dynamo = 'LoginTestComponent!'
    return(
      <div>
        <h1>Hello from the {dynamo}</h1>
        <h3>Oh, and helloWorld!</h3>
      </div>
    )
  }

}
