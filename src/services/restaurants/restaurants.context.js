import React, { useState, useContext, createContext, useEffect } from "react";
import { LocationContext } from "../location/location.context";
import { getCommonStores } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const { longitude, latitude, keyword, isLoading, setIsLoading } =
    useContext(LocationContext);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        if (latitude !== null) {
          const data = await getCommonStores(`${latitude},${longitude}`);
          setRestaurants(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError("Error fetching data");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [longitude]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
