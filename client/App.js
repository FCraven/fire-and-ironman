import React from 'react';
import './App.css'
import { Signup, Login } from './components/auth'
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <section id="App">
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route path='/auth/login' component={Login} />
      </Switch>
    </section>
  );
}

export default App;
