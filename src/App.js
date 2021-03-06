import React from 'react';
import './App.css';
import { Switch ,Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const Hatspage=()=>(
  <div>
    <h1>HAT page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={Hatspage }/>
    </Switch>
    </div>
  );
}

export default App;
