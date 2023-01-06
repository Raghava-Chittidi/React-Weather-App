import classes from "./ForecastItem.module.css";

const ForecastItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.time}>{props.time}</div>
      <div className={classes.icon}>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.icon}
        ></img>
      </div>
      <div className={classes.temp}>{props.temp}°</div>
    </div>
  );
};

export default ForecastItem;
