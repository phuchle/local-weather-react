import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import ReactRouter from 'react-router';
import Route from 'react-router'.Route;
import Switch from 'react-router'.Switch;

class App extends React.Component {
  render() {
    return (
      <div className='container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <NavBar />
        <Home />
      </div>
    )
  }
}

module.exports = App;
