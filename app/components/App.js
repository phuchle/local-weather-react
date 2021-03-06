import React from 'react';
import Forecast from './Forecast';
import LocationInput from './LocationInput';
import Details from './Details';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route render={(props) => {
            return (
              <div className='navbar'>
                <Link style={{textDecoration: 'none'}} to='/'>
                  <h1 className='title'>What's the weather?</h1>
                </Link>
                <LocationInput
                  direction='row'
                  onSubmitLocation={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: `?city=` + city
                    })
                  }}
                />
              </div>
            )
          }} />

          <Route exact path='/' render={(props) => {
            return (
              <div className='home' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
              <p className='heading'>Enter a City and State</p>
                <LocationInput
                  direction='column'
                  onSubmitLocation={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: `?city=` + city
                    });
                  }}
                />
              </div>
            )
          }} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/details' component={Details} />
        </div>
      </Router>
    )
  }
}

export default App;
