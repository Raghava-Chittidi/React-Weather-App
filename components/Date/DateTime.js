import classes from "./DateTime.module.css";

const DateTime = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const [month, day, year, dateNum] = [
    monthNames[date.getMonth()],
    weekday[date.getDay()],
    date.getFullYear(),
    date.getDate(),
  ];

  let [hour, minutes] = [date.getHours(), date.getMinutes()];
  let ampm;

  ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) {
    hour = 12;
  }

  minutes = minutes.toString().padStart(2, "0");

  const dateString = `${day}, ${dateNum} ${month} ${year} | Local Time: ${hour}:${minutes} ${ampm}`;

  return <div className={classes.date}>{dateString}</div>;
};

export default DateTime;
