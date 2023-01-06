import { useRouter } from "next/router";
import WeatherDetails from "../../../components/weather/WeatherDetails";
import Head from "next/head";
import { Fragment } from "react";

const ForecastPage = () => {
  const router = useRouter();
  const city = router.query.city;

  return (
    <Fragment>
      <Head>
        <title>{city} Forecast</title>
        <meta
          name="description"
          content={`{Weather forecast for the city of ${city}`}
        ></meta>
      </Head>
      <WeatherDetails city={city} />;
    </Fragment>
  );
};

export default ForecastPage;
