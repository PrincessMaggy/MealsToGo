import React from "react";
import styled from "styled-components/native";
import { Platform, Text } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Img = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Img
        source={{
          uri:
            Array.isArray(restaurant.imageUrl) && restaurant.imageUrl.length > 0
              ? restaurant.imageUrl[0]
              : "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
