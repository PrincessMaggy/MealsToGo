import React, { useState, useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
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

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext, "restaurantsContext");

  return (
    <SafeArea>
      <Container>
        <View>
          <Search
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          ></Search>
        </View>
        <RestaurantList
          data={restaurantsContext.restaurants}
          renderItem={({}) => <RestaurantInfo />}
          keyExtractor={(item) => item.val}
        />
      </Container>
    </SafeArea>
  );
};
