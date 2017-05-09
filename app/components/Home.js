import React from 'react';
import LocationInput from './LocationInput';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <p className='heading'>Enter a City and State</p>
        <LocationInput className='home'/>
      </div>
    )
  }
}

module.exports = Home;
