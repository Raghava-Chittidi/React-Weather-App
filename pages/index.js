import WeatherSearch from "../components/weather/WeatherSearch";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Weather</title>
        <meta
          name="description"
          content="Find the weather forecast of any city!"
        ></meta>
      </Head>
      <WeatherSearch />
    </Fragment>
  );
};

export default HomePage;
