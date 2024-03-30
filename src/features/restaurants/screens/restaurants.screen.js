import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import { Searchbar,  } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const Search = styled(Searchbar)`
  padding: 5px;
  margin:15px;
  backgroundcolor: green;
`;
const Container = styled(View)`
  flex: 1;
  backgroundcolor: green;
  alignitems: center;
  justifycontent: center;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <RestaurantListContainer>
          <RestaurantInfo />
        </RestaurantListContainer>
      </Container>
    </SafeArea>
  );
};
