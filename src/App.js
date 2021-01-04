import React, { Component } from "react";
import Titles from "./components/Titles/Titles";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

class App extends Component {
  // state must be declared globally
  state = {
    // defining the intial state of the following objects
    temperature: undefined, // setting the state of the temprature variable
    city: undefined, // setting the init state of the city as undefined
    country: undefined, // setting the init state of country as undefined
    humidity: undefined, // setting the init state of the humidity as undefined
    description: undefined, // setting the init state of the description as undefined
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault(); // to avoid full refresh of the web page
    //using the fetch api instead of axios

    const city = e.target.elements.city.value; // getting the form element input
    const country = e.target.elements.country.value; //getting the form element input

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${process.env.REACT_APP_API_KEY}`
    ); // no axios library require, using fetch api to fetch the data
    const data = await api_call.json(); //converting the data to json format
    // only if the city value and the country value are passed then alone execute, else do nothing, the undermentioned
    // source can also be written as (city && country) for truthy expression
    if (city && country) {
      this.setState({
        // setting the state after data retrival
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description, // the weather under data is an array hence using the weather[0] to access it
        error: "",
      });
    } else {
      this.setState({
        // setting the state after data retrival
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined, // the weather under data is an array hence using the weather[0] to access it
        error: "Please enter the values...",
      });
    }
  };
  // sending the fetched data as props below in the form tag
  // sending the state props to weather component
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
