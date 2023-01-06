import WeatherListItem from "./WeatherListItem";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

import classes from "./FavouriteWeatherList.module.css";
import Card from "../UI/Card";

const FavouriteWeatherList = () => {
  const favouriteCtx = useContext(FavouritesContext);
  const favourites = favouriteCtx.favourites;

  return (
    <Card className={classes.card}>
      {favourites.length !== 0 ? (
        <ul className={classes.list}>
          {favourites.map((weatherData) => {
            return (
              <WeatherListItem
                className={classes.listItem}
                key={weatherData.city}
                city={weatherData.city}
                temp={weatherData.temp}
                description={weatherData.description}
                icon={weatherData.icon}
                humidity={weatherData.humidity}
                wind={weatherData.wind}
              />
            );
          })}
        </ul>
      ) : (
        <p className={classes.message}>
          You have not yet added any cities to your favourites list!
        </p>
      )}
    </Card>
  );
};

export default FavouriteWeatherList;
