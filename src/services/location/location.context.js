import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";
import { getCommonStores } from "../restaurants/restaurants.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("san francisco");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  const getLocationCoordinates = async (locationName) => {
    let lati;
    let longi;
    if (locationName) {
      console.log(locationName, "locationName");
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            locationName
          )}`
        );
        const data = await response.json();
        if (data) {
          lati = parseFloat(data[0].lat);
          longi = parseFloat(data[0].lon);
          setLatitude(lati);
          setLongitude(longi);
          getCommonStores(`${latitude},${longitude}`);
          return { latitude, longitude };
        } else {
          throw new Error("Location not found");
        }
      } catch (error) {
        console.error("Error converting location to coordinates:", error);
        throw error;
      }
    }
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        keyword,
        error,
        location,
        getLocationCoordinates,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
