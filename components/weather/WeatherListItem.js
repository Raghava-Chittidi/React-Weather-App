import Card from "../UI/Card";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import Link from "next/link";

import classes from "./WeatherListItem.module.css";
import FavouritesContext from "../store/favourites-context";

const WeatherListItem = (props) => {
  const favouriteCtx = useContext(FavouritesContext);
  const isFavourite = favouriteCtx.isFavourite(props.city);

  const favouriteHandler = () => {
    if (!isFavourite) {
      favouriteCtx.addToFavourites({
        city: props.city,
        temp: props.temp,
        description: props.description,
        icon: props.icon,
        humidity: props.humidity,
        wind: props.wind,
      });
    } else {
      favouriteCtx.removeFromFavourites(props.city);
    }
  };

  return (
    <li className={`${classes.item} ${props.className}`}>
      <Card className={classes.card}>
        <h1>{props.city}</h1>
        <h2>{props.temp}°C</h2>
        <div className={classes.icon}>
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt={props.icon}
            ></img>
          </span>
          <span>{props.description}</span>
        </div>
        <div className={classes.description}>
          <div className={classes.wind}>Wind Speed: {props.wind}km/</div>
          <div>Humidity: {props.humidity}%</div>
        </div>
        <div
          className={classes.favourite}
          title={!isFavourite ? "Add to Favourites" : "Remove from favourites"}
          onClick={favouriteHandler}
        >
          {!isFavourite ? (
            <AiOutlineStar />
          ) : (
            <AiFillStar style={{ color: "yellow" }} />
          )}
        </div>
        <div className={classes.actions}>
          <button>
            <Link href={`/forecast/${props.city}`}>View Forecast</Link>
          </button>
        </div>
      </Card>
    </li>
  );
};

export default WeatherListItem;
