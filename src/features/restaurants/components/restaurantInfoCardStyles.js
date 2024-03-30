import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View, Image } from "react-native";



export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(prop) => prop.theme.space[1]};
  padding-bottom: ${(prop) => prop.theme.space[1]};
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  gap: ${(props) => props.theme.space[1]};
`;
