import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space[0]};
  margin: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.muted};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  return (
    <View>
      <SearchBar
        placeholder="Search by location"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      ></SearchBar>
    </View>
  );
};
