import React from 'react';
import LocationInput from './LocationInput';

class NavBar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <h1 className='title'>What's the weather?</h1>
        <LocationInput className='searchbar'/>
      </div>
    )
  }
}

module.exports = NavBar;
