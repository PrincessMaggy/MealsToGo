import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";
import { SafeArea } from "../../../components/utility/safearea.component";
import { SearchMap } from "../components/mapsearch.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import { PROVIDER_GOOGLE } from "react-native-maps";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <SafeArea>
      <SearchMap />
      <Map
        // provider={PROVIDER_GOOGLE}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((item) => (
          <Marker
            key={item.name}
            title={item.name}
            coordinate={{
              latitude: item.geometry.location.lat,
              longitude: item.geometry.location.lng,
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
