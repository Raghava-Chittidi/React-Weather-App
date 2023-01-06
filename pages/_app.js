import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import {FavouritesContextProvider} from "../components/store/favourites-context";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <FavouritesContextProvider>
        <Component {...pageProps} />
      </FavouritesContextProvider>
    </Layout>
  );
}
