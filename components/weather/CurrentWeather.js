import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import classes from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
  return (
    <div className={classes.current}>
      <div className={classes.description}>{props.main}</div>
      <div className={classes.mainDetails}>
        <div className={classes.icon}>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt={props.icon}
          ></img>
        </div>
        <div className={classes.temp}>{props.temp}°</div>
        <div className={classes.stats}>
          <div className={classes.statsDetails}>
            <div>
              <WiThermometer style={{ fontSize: "1.5rem" }} />
            </div>
            <div>Real Felt: {props.temp}°</div>
          </div>
          <div className={classes.statsDetails}>
            <div>
              <WiHumidity style={{ fontSize: "1.5rem" }} />
            </div>
            <div>Humidity: {props.humidity}%</div>
          </div>
          <div className={classes.statsDetails}>
            <div>
              <WiStrongWind style={{ fontSize: "1.5rem" }} />
            </div>
            <div className={classes.wind}>Wind: {props.wind}km/</div>
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.subDetails}>
          <div>
            <WiDaySunny
              style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}
            />
          </div>
          <div>Rise: 04:50 AM</div>
        </div>
        <div className={classes.subDetails}>
          <div>
            <WiSunset style={{ fontSize: "1.25rem", marginRight: "0.5rem" }} />
          </div>
          <div>Set: 09:06 PM</div>
        </div>
        <div className={classes.subDetails}>
          <div>
            <AiOutlineArrowUp
              style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}
            />
          </div>
          <div>High: {props.max}° </div>
        </div>
        <div className={classes.subDetails}>
          <div>
            <AiOutlineArrowDown
              style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}
            />
          </div>
          <div>Low: {props.min}°</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
