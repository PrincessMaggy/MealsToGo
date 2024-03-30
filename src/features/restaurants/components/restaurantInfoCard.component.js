import React from "react";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { StyledText } from "../../../components/typography/text.component";
import {
  SectionEnd,
  RestaurantCard,
  Info,
  RestaurantCardCover,
  Section,Rating
} from "./restaurantInfoCardStyles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Wizzy Maestro",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
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
          <StyledText variant="label">{name}</StyledText>
          <Section>
            <Rating>
              {ratingArr.map(
                (
                  _,
                  index // Use index as a key
                ) => (
                  <SvgXml
                    key={`star-${index}`}
                    xml={star}
                    width={20}
                    height={20}
                  />
                )
              )}
            </Rating>
            <SectionEnd>
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
