import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigation";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Restaurants") {
            iconName = "restaurant-outline";
          } else if (route.name == "Settings") {
            iconName = "md-settings";
          } else if (route.name == "Map") {
            iconName = "md-map";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Restaurants"
        options={{ headerShown: false }}
        component={RestaurantsNavigator}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
}
