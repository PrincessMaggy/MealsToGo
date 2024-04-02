import React from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { SafeArea } from "../../../components/utility/safearea.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Map></Map>
    </SafeArea>
  );
};
