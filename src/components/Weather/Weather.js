import React from "react";

// instead of class component using the stateless functional component
// class Weather extends React.Component {
//   render() {
//     return (
//       // if the props value is true, then alone print the data to the screen, ergo performing the and operation
//       <div>
//         {this.props.city && this.props.country && (
//           <p>
//             Location: {this.props.city}, {this.props.country}
//           </p>
//         )}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Condition: {this.props.description}</p>}
//         {this.props.error && <p>Error: {this.props.error}</p>}
//       </div>
//     );
//   }
// }

// if you're explicitly returning only one root element, div in this case
// if you are providing just once single argument, then the parenthesis can also be removed aroudn the props
const weather = (props) => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature(Kelvin):
        <span className="weather__value">{props.temperature}</span>{" "}
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Condition: <span className="weather__value">{props.description}</span>
      </p>
    )}
    {props.error && (
      <p className="weather__key">
        Error: <span className="weather__error">{props.error}</span>{" "}
      </p>
    )}
  </div>
);

export default weather;
