import { useRef, useEffect, useState } from "react";
import useCity from "../hooks/use-city";

import Card from "../UI/Card";
import WeatherListItem from "./WeatherListItem";
import classes from "./WeatherSearch.module.css";

const WeatherSearch = () => {
  const [city, setCity] = useState("Tokyo");
  const cityInputRef = useRef();

  const { weatherData, fetchWeather, error, isLoading } = useCity();

  useEffect(() => {
    if (city) {
      fetchWeather(city);
      const html = document.getElementsByTagName("html")[0];
      html.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${city}")`;
    }
  }, [fetchWeather, city]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!cityInputRef.current.value) {
      return;
    }

    setCity(cityInputRef.current.value);
  };

  return (
    <Card className={classes.search}>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Search for a city"
          autoComplete="off"
          className={classes.input}
          ref={cityInputRef}
        ></input>
        <button className={classes.button}>Search</button>
      </form>
      {error ? <p className={classes.message}>{error}</p> : ""}
      {isLoading && !error ? (
        <p className={classes.message}>Loading...</p>
      ) : (
        "  "
      )}
      {weatherData && !error && !isLoading ? (
        <WeatherListItem
          city={weatherData.city}
          temp={weatherData.temp}
          description={weatherData.description}
          icon={weatherData.icon}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
        />
      ) : (
        ""
      )}
    </Card>
  );
};

export default WeatherSearch;
