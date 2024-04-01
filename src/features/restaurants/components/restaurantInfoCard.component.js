import React from "react";
import { Card } from "react-native-paper";
import { Image, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { StyledText } from "../../../components/typography/text.component";
import {
  SectionEnd,
  RestaurantCard,
  Info,
  RestaurantCardCover,
  Section,
  Rating,
} from "./restaurantInfoCardStyles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos = [],
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
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
          <StyledText variant="label">{name}</StyledText>
          <Section>
            <Rating>
              {ratingArr.map((_, index) => (
                <SvgXml
                  key={`star-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && <Text style={{color:'red'}}>CLOSED TEMPORARILY</Text>}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <StyledText variant="label">{address}</StyledText>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
