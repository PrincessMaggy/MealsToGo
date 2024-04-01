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
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  
    
  return (
    <LocationContext.Provider
      value={{ isLoading, keyword, error, location, search: () => null }}
    >
      {children}
    </LocationContext.Provider>
  );
};
