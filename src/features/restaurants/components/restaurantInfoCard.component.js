import React from "react";
import { Text, Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: red;
  padding: 10px;
`;
const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "white";
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Wizzy maestro",
    icon,
    photos = [
      "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=1480&t=st=1711461107~exp=1711461707~hmac=ac12768ce37a5419370d5a7c5a4a19a4a8833d01af0ea63a9e3677345fd6549e",
    ],
    address = "1, Balogun Ikeja Lagos",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
