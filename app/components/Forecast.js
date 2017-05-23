import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null,
      error: null,
      city: queryString.parse(this.props.location.search).city,
      loading: true
    }
  }
  componentDidMount() {
    api.fetchFiveDayForecast(this.state.city)
      .then((results) => {
        if (results === null) {
          return this.setState(() => {
            return {
              error: 'Check city exists.',
              loading: false
            }
          })
        }

        this.setState(() => {
          return {
            forecast: results,
            loading: false
          }
        });
      });
  }
  render() {
    let error = this.state.error;
    let loading = this.state.loading;
    if (loading) {
      return (
        <div className='forecast'>
          <p>Loading</p>
        </div>
      )
    }
    if (error) {
      return (
        <div className='forecast'>
          <p>{error}</p>
        </div>
      )
    }
    return (
      <div className='forecast'>
        <h1>Five Day Forecast for {this.state.city}</h1>
        <div className='weather-container'>
          {this.state.forecast.map((day) => {
            return (
              <Link
                key={day.date}
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to={{
                  pathname: '/details',
                  search: `?city=` + this.state.city,
                  state: day
                }}>
              <div className='weather-preview'>
                  <img width='100%' height='100%' src={'./app/images/weather-icons/' + day.icon + '.svg'} />
                  <h2>
                    {day.date}
                  </h2>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Forecast;
