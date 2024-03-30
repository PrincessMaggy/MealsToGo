import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(prop) => prop.theme.space[1]};
  padding-bottom: ${(prop) => prop.theme.space[1]};
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

  const ratingArr = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Card.Content>
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArr.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
