import React from 'react';
import PropTypes from 'prop-types';

class LocationInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
      return {
        location: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.location);

  }
  render () {
    return (
      <div>
        <form className={this.props.className} onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='San Jose, CA'
            value={this.state.location}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <button
            type='submit'
            className='button'
            disabled={!this.state.location}
            >
              Get Weather
            </button>

          </form>
        </div>
    )
  }
}

LocationInput.defaultProps = {
  className: ''
}

LocationInput.propTypes = {
  className: PropTypes.string.isRequired
}

module.exports = LocationInput;
