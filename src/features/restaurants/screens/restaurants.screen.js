import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import { Searchbar,  } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const Search = styled(Searchbar)`
  padding: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;
const Container = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  alignitems: center;
  justifycontent: center;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
