import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigation } from "./app.navigation";
import { AccountNavigator } from "./account.navigation";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const MainNavigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
console.log(isAuthenticated, "isAuthenticated");
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
