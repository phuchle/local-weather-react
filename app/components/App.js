import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <NavBar />
          <Home />
        </div>
      </Router>
    )
  }
}

module.exports = App;
