import React from 'react';
import Forecast from './Forecast';
import LocationInput from './LocationInput';
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
          <Route render={(props) => {
            return (
              <div className='navbar'>
                <h1 className='title'>What's the weather?</h1>
                <LocationInput
                  className='searchbar'
                  onSubmitLocation={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city' + city
                    })
                  }}
                />
              </div>
            )
          }} />

          <Route exact path='/' render={(props) => {
            return (
              <div className='home'>
                <p className='heading'>Enter a City and State</p>
                <LocationInput
                  className='home'
                  onSubmitLocation={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city' + city
                    });
                  }}
                />
              </div>
            )
          }} />
          <Route path='/forecast' component={Forecast} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
