import React, { useState, useContext, createContext, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(err, "err");
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);



  const getCommonStores = async (latLong = "6.6018,3.3515") => {
     RESTAURANT_API =
        process.env.EXPO_PUBLIC_REACT_APP_RESTAURANT_API;
    try {
      const searchParams = new URLSearchParams({
        query: "restaurant",
        ll: latLong,
        sort: "DISTANCE",
        limit: 10,
      });

      const results = await fetch(
        `https://api.foursquare.com/v3/places/search?${searchParams}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: RESTAURANT_API,
          },
        }
      );

      const data = await results.json();

      if (data?.error) {
        console.error("API error", data.error);
        return [];
      }

      console.log({ items: data.results });
      const itemsWithImages = await Promise.all(
        data.results.map((item) => {
          const imageUrl =
            item.categories[0]?.icon?.prefix +
            "32" +
            item.categories[0]?.icon?.suffix;

          return {
            imageUrl,
            name: item.name,
            id: item.fsq_id,
            location: item.location.formatted_address,
            locality: item.location.locality,
            categories: item.categories.map((item) => item.name).join(", "),
          };
        })
      );
      // console.log(itemsWithImages, "itemsWithImages");
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, isLoading, error, getCommonStores }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
