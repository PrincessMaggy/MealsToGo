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
    location,
    id,
    imageUrl,
    closed_bucket,
  } = restaurant;

  let ratingArr;

  if (Array.isArray(imageUrl) && imageUrl.length !== 0) {
    ratingArr = Array.from(new Array(Math.floor(imageUrl.length / 3)));
  } else {
    ratingArr = [];
  }
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} onPress={onPressIcon} />
        <RestaurantCardCover
          key={name}
          source={{
            uri:
              Array.isArray(imageUrl) && imageUrl.length > 0
                ? imageUrl[0]
                : "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          }}
        ></RestaurantCardCover>
      </View>

      <Card.Content>
        <Info>
          <StyledText variant="label">{name}</StyledText>
          <Section>
            <Rating>
              {ratingArr.map((_, index) => (
                <SvgXml
                  key={`star-${id}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {closed_bucket !== "VeryLikelyOpen" && (
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              )}
              {closed_bucket == "VeryLikelyOpen" && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </SectionEnd>
          </Section>
          <StyledText variant="label">{location}</StyledText>
        </Info>
      </Card.Content>
    </RestaurantCard>
  );
};
