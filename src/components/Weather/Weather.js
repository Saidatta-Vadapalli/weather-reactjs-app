import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      // if the props value is true, then alone print the data to the screen, ergo performing the and operation
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
