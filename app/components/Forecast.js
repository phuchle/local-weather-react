import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';

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
          <h1>Five Day Forecast</h1>
          <div className='weather-container'>
            {this.state.forecast.map((day) => {
              return (
                <div className='weather-preview' key={day.date}>
                  <img width='75%' height='75%' src={'./app/images/weather-icons/' + day.icon + '.svg'} />
                  <h2>
                    {day.date}
                  </h2>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

module.exports = Forecast;
