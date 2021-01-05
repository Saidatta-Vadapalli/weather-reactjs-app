import React from "react";

// class Titles extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Weather Application</h1>
//         <p>Find out the Temprature, conditions and more</p>
//       </div>
//     );
//   }
// }

const Title = (props) => (
  <div>
    <h1 className="title-container__title">Weather Finder</h1>
    <h3>Find out the Temprature, Conditions and More...</h3>
  </div>
);

export default Title;
