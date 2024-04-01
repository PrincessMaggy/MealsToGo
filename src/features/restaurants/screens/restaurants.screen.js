import React, { useState, useContext } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safearea.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Search = styled(Searchbar)`
  padding: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;
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

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
        <View>
          <Search
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          ></Search>
        </View>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </SafeArea>
  );
};
