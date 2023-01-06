import React, { useState } from "react";

const FavouritesContext = React.createContext({
  favourites: [],
  addToFavourites: (weatherData) => {},
  removeFromFavourites: (city) => {},
  isFavourite: (city) => {},
});

export const FavouritesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavouritesHandler = (weatherData) => {
    setFavourites((prevState) => {
      return prevState.concat(weatherData);
    });
  };

  const removeFromFavouritesHandler = (city) => {
    setFavourites((prevState) => {
      return prevState.filter((location) => location.city !== city);
    });
  };

  const isFavourite = (city) => {
    return favourites.some((location) => location.city === city);
  };

  const favouritesContextValue = {
    favourites: favourites,
    addToFavourites: addToFavouritesHandler,
    removeFromFavourites: removeFromFavouritesHandler,
    isFavourite: isFavourite,
  };

  return (
    <FavouritesContext.Provider value={favouritesContextValue}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
