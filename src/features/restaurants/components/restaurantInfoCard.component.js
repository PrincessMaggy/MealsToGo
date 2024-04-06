import React from "react";
import { Card } from "react-native-paper";
import { Image, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { StyledText } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourite/favourite.component";

import {
  SectionEnd,
  RestaurantCard,
  Info,
  RestaurantCardCover,
  Section,
  Rating,
} from "./restaurantInfoCardStyles";

export const RestaurantInfo = ({ restaurant = {}, onPressIcon }) => {
  const {
    name,
    icon,
    photos = [],
    vicinity,
    isOpenNow,
    rating,
    placeId,
    isClosedTemporarily,
  } = restaurant;

  let ratingArr;
  if (rating !== undefined) {
    ratingArr = Array.from(new Array(Math.floor(rating)));
  } else {
    ratingArr = Array.from(new Array(Math.floor(0)));
  }
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} onPress={onPressIcon} />
        <RestaurantCardCover
          key={name}
          source={{ uri: photos[0] }}
        ></RestaurantCardCover>
      </View>

      <Card.Content>
        <Info>
          <StyledText variant="label">{name}</StyledText>
          <Section>
            <Rating>
              {ratingArr.map((_, index) => (
                <SvgXml
                  key={`star-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <StyledText variant="label">{vicinity}</StyledText>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
