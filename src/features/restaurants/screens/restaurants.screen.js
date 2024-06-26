import React, { useState, useContext } from "react";
import { View, FlatList, Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safearea.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FadeInView } from "../../../components/animations/fade.animation";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { LocationContext } from "../../../services/location/location.context";

const Container = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    gap: 5,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, error } = useContext(RestaurantsContext);
    const {  isLoading } = useContext(LocationContext);

  const { favourites, addToFavourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const handlePressRestaurant = (restaurant, isIconPress) => {
    if (!isIconPress) {
      const isFavourite = favourites.some(
        (fav) => fav.placeId === restaurant.placeId
      );
      if (!isFavourite) {
        addToFavourites(restaurant);
      }
      navigation.navigate("RestaurantDetail", {
        restaurant: restaurant,
      });
    }
  };
  return (
    <SafeArea>
      <Container>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator
              size={50}
              animating={true}
              style={{ marginLeft: -25 }}
              color="blue"
            />
          </LoadingContainer>
        )}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}

        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => handlePressRestaurant(item, false)}
              >
                <FadeInView>
                  <RestaurantInfo
                    restaurant={item}
                    onPressIcon={() => handlePressRestaurant(item, true)}
                  />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => `${item.id} item.name`}
        />
      </Container>
    </SafeArea>
  );
};
