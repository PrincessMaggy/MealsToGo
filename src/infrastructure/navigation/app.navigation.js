import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Restaurants") {
            iconName = "restaurant";
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
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      {/* <Tab.Screen name="Map" component={RestaurantsNavigator} />
      <Tab.Screen name="Settings" component={RestaurantsNavigator} /> */}
    </Tab.Navigator>
  );
}