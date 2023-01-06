import classes from "./Forecast.module.css";
import ForecastItem from "./ForecastItem";

const Forecast = (props) => {
  return (
    <div className={classes.forecast}>
      <div className={classes.forecastName}>
        {props.interval === "hourly" ? "HOURLY" : "DAILY"} FORECAST
      </div>
      <hr></hr>
      <div className={classes.forecastItems}>
        {props.forecast.map((item) => (
          <ForecastItem
            time={item.time}
            icon={item.icon}
            temp={item.temp}
            key={`${Math.random()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
