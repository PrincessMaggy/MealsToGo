import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/accounts.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator options={{ headerShown: false }}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={AccountScreen} />
    <Stack.Screen name="Register" component={AccountScreen} />
  </Stack.Navigator>
);
