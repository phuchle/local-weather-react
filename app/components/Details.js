import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

function Details(props) {
  return (
    <div className='details'>
      <img width='75%' src={'./app/images/weather-icons/' + props.location.state.icon + '.svg'} />
      <p>{queryString.parse(props.location.search).city}</p>
      <p>{props.location.state.date}</p>
      <p>{props.location.state.details.description}</p>
      <p>min temp: {props.location.state.details.minTemp}</p>
      <p>max temp: {props.location.state.details.maxTemp}</p>
      <p>humidity: {props.location.state.details.humidity}</p>
    </div>
  )
}

module.exports = Details;
