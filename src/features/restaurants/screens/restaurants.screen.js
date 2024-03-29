import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurantInfoCard.component";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
      <RestaurantInfo/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    padding: 16,
    backgroundColor: "green",
    width: 300,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
