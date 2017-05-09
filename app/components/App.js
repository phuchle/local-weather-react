import React from 'react';
import Home from './Home';
import NavBar from './NavBar';

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
