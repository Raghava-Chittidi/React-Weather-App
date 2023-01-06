import { Fragment, useEffect } from "react";
import DateTime from "../Date/DateTime";
import Forecast from "../forecast/Forecast";
import useCity from "../hooks/use-city";
import CurrentWeather from "./CurrentWeather";
import Card from "../UI/Card";

import classes from "./WeatherDetails.module.css";

const WeatherDetails = (props) => {
  const { forecastData, getForecast, weatherData, fetchWeather } = useCity();
  const city = props.city;

    useEffect(() => {
      getForecast(city);
      fetchWeather(city);
    }, [getForecast, fetchWeather, city]);

  return (
    <Card className={classes.forecast}>
      <DateTime />
      <div className={classes.city}>{city}</div>
      {weatherData ? (
        <CurrentWeather
          key={weatherData.city}
          temp={weatherData.temp}
          icon={weatherData.icon}
          humidity={weatherData.humidity}
          min={weatherData.minTemp}
          max={weatherData.maxTemp}
          main={weatherData.main}
          wind={weatherData.wind}
        />
      ) : (
        ""
      )}
      {forecastData ? (
        <Fragment>
          <Forecast forecast={forecastData.hourlyForecast} interval="hourly" />
          <Forecast forecast={forecastData.dailyForecast} interval="daily" />
        </Fragment>
      ) : (
        ""
      )}
    </Card>
  );
};

export default WeatherDetails;
