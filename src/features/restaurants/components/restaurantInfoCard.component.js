import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.error};
  padding: ${(props) => props.theme.space[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h1};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Wizzy Maestro",
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
