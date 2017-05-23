import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

class LocationInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
      return {
        city: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmitLocation(this.state.city);
  }
  render () {
    return (
      <div className='input-container' style={{flexDirection: this.props.direction}}>
        <input
          type='text'
          placeholder='San Jose, CA'
          value={this.state.location}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
          className='button'
          disabled={!this.state.city}
          >
            Get Weather
        </button>

      </div>
    )
  }
}

LocationInput.propTypes = {
  direction: PropTypes.string.isRequired,
  onSubmitLocation: PropTypes.func.isRequired
}

export default LocationInput;
