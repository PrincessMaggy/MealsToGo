import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { StyledText } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safearea.component";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfo } from "../../restaurants/components/restaurantInfoCard.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites?.length ? (
    <SafeArea>
      <View>
        <StyledText variant="body">Favourites</StyledText>
      </View>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
