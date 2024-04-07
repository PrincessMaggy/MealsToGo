import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("san francisco");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    console.log(locationName, 'locationName');
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          locationName
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon
        return { latitude, longitude };
      } else {
        throw new Error("Location not found");
      }
    } catch (error) {
      console.error("Error converting location to coordinates:", error);
      throw error;
    }
  };


  return (
    <LocationContext.Provider
      value={{ isLoading, keyword, error, location,getLocationCoordinates, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
