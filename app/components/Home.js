import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <p className='heading'>Enter a City and State</p>
        <input type='text' placeholder='San Jose, CA' />
        <button className='button'>Get Weather</button>
      </div>
    )
  }
}

module.exports = Home;