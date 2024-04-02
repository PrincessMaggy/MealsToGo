import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled(View)`
  z-index: 999;
  position: absolute;
  top: 65px;
  width: 100%;
`;

export const SearchMap = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
    //search(searchQuery);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search for location"
        icon="map"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      ></SearchBar>
    </SearchContainer>
  );
};
