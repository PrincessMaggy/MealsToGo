import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="SettingStack"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="Favourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="Camera"
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  );
};
