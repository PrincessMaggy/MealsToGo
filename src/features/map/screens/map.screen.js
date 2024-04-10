import React, { useContext } from "react";
import styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";
import { SafeArea } from "../../../components/utility/safearea.component";
import { SearchMap } from "../components/mapsearch.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { latitude, longitude } = useContext(LocationContext);

  if (!latitude || !longitude) {
    return (
      <SafeArea>
        <ActivityIndicator
          size={50}
          animating={true}
          style={{ marginLeft: -35, marginTop: 40 }}
          color="blue"
        />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <SearchMap />
      <Map
        // provider={PROVIDER_GOOGLE}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((item) => (
          <Marker
            key={item.name}
            title={item.name}
            coordinate={{
              latitude: item.geoLat,
              longitude: item.geoLong,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <MapCallout restaurant={item} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </SafeArea>
  );
};
