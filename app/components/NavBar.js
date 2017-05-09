import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <h1 className='title'>What the weather?</h1>
        <div className='searchbar'>
          <input type='text' placeholder='San Jose, CA' />
          <button className='button'>Get Weather</button>
        </div>
      </div>
    )
  }
}

module.exports = NavBar;
