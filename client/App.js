import React from 'react';
import './App.css'
import { Signup, Login } from './components/auth'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginTest from './components/LoginTest'



function App() {
  return (
    <section id="App">
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/logintest' component={LoginTest} />
      </Switch>
    </section>
  );
}

export default App;
