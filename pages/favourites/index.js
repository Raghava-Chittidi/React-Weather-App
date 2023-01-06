import FavouriteWeatherList from "../../components/weather/FavouriteWeatherList";
import Head from "next/head";
import { Fragment } from "react";

const FavouritePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Favourite Cities</title>
        <meta name="description" content="Weather details of the cities in the favourites list"></meta>
      </Head>
      <FavouriteWeatherList />
    </Fragment>
  );
};

export default FavouritePage;
