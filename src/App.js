import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import StartSession from './components/StartSession';
import WallStBets from './components/WallStBets';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/expected-date' component={WallStBets} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={StartSession} />
        </Switch>
      </div>
    )
  }
}

export default App;
