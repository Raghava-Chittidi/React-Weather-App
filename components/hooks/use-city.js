import { useCallback, useState } from "react";

const useCity = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const dateFormatter = (hour, min) => {
    let ampm;

    ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) {
      hour = 12;
    }

    min = min.toString().padStart(2, "0");

    return `${hour}:${min} ${ampm}`;
  };

  const convertDateTime = (dt, interval) => {
    const [date, time] = dt.split(" ");
    let [hour, min, sec] = time.split(":");

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = new Date(date).getDay();

    if (interval === "time") {
      return dateFormatter(hour, min);
    }
    else {
      return weekday[day];
    }
    
  };

  const fetchWeather = useCallback(async (city) => {
    try {
      setError(false);
      setIsLoading(true);
      const getCoordUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;
      const coordResponse = await fetch(getCoordUrl + API_KEY);
      const coordData = await coordResponse.json();

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordData.coord.lat}&lon=${coordData.coord.lon}&appid=`;
      const weatherResponse = await fetch(weatherUrl + API_KEY);
      const weatherData = await weatherResponse.json();

      setIsLoading(false);

      setWeather({
        city: weatherData.name,
        description: weatherData.weather[0].description,
        main: weatherData.weather[0].main,
        icon: weatherData.weather[0].icon,
        temp: (weatherData.main.temp - 273.15).toFixed(0),
        feels_like: (weatherData.main.feels_like - 273.15).toFixed(0),
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        minTemp: (weatherData.main.temp_min - 273.15).toFixed(0),
        maxTemp: (weatherData.main.temp_max - 273.15).toFixed(0),
        sunrise: dateFormatter(
          new Date(weatherData.sys.sunrise * 1000).getHours(),
          new Date(weatherData.sys.sunrise * 1000).getMinutes()
        ),
        sunset: dateFormatter(
          new Date(weatherData.sys.sunset * 1000).getHours(),
          new Date(weatherData.sys.sunset * 1000).getMinutes()
        ),
      });
    } catch (err) {
      setError("Invalid city name!");
    }
  }, []);

  const getForecastObj = (forecastData) => {
    let hourlyForecast = [];
    let dailyForecast = [];

    for (let i = 0; i < 5; i++) {
      const obj = {
        time: convertDateTime(forecastData.list[i]["dt_txt"], "time"),
        icon: forecastData.list[i].weather[0].icon,
        temp: (forecastData.list[i].main.temp - 273.15).toFixed(0),
      };

      hourlyForecast.push(obj);
    }

    for (let i = 0; i <= 32; i += 8) {
      const obj = {
        time: convertDateTime(forecastData.list[i]["dt_txt"], "day"),
        icon: forecastData.list[i].weather[0].icon,
        temp: (forecastData.list[i].main.temp - 273.15).toFixed(0),
      };

      dailyForecast.push(obj);
    }

    return {
      hourlyForecast: hourlyForecast,
      dailyForecast: dailyForecast,
    };
  };

  const getForecast = useCallback(async (city) => {
    try {
      setError(false);
      setIsLoading(true);
      const getCoordUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`;
      const coordResponse = await fetch(getCoordUrl + API_KEY);
      const coordData = await coordResponse.json();

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordData.coord.lat}&lon=${coordData.coord.lon}&appid=`;

      const forecastResponse = await fetch(forecastUrl + API_KEY);
      const forecastData = await forecastResponse.json();

      const forecastObj = getForecastObj(forecastData);

      setIsLoading(false);
      setForecastData(forecastObj);
    } catch (err) {
      setError("Invalid city name!");
    }
  }, []);

  return {
    weatherData: weather,
    forecastData: forecastData,
    error: error,
    isLoading: isLoading,
    fetchWeather: fetchWeather,
    getForecast: getForecast,
  };
};

export default useCity;
