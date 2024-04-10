import { Lato_100Thin_Italic } from "@expo-google-fonts/lato";
import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Lagos Ikeja");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  useEffect(() => {
    const getLocationCoordinates = async () => {
      let lati;
      let longi;
      if (keyword) {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              keyword
            )}`
          );
          const data = await response.json();
          if (data.length > 0) {
            lati = parseFloat(data[0].lat);
            longi = parseFloat(data[0].lon);
            setLatitude(lati);
            setLongitude(longi);
            return { latitude, longitude };
          } else {
            setError("Location not found");
          }
        } catch (error) {
          setError("Error converting location to coordinates");
        }
      }
    };
    const timeout = setTimeout(() => {
      getLocationCoordinates();
    }, 1000);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        keyword,
        latitude,
        longitude,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
