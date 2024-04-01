import React, { useState, useContext } from "react";
import { View, FlatList, Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safearea.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    gap: 5,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Container>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator
              size={50}
              animating={true}
              style={{ marginLeft: -25 }}
              color="blue"
            />
          </LoadingContainer>
        )}
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </SafeArea>
  );
};
