import React from "react";
let display = null;
const Result = (props) => {
  const {
    err,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    city,
  } = props.state;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    display = (
      <>
        <article className="article">
          <div>Weather for city: {city}</div>
          <p>date: {date}</p>
          <p>temperature: {temp}&#8451;</p>
          <p>wind: {wind}m/s </p>
          <p>pressure: {pressure}hPa</p>
          <p>sunrise: {sunriseTime} </p>
          <p>sunset: {sunsetTime} </p>
        </article>
      </>
    );
  }
  return <div>{err ? "Sorry something wrong" : display}</div>;
};

export default Result;
