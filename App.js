import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
        <Text>Open up App.js to start working on your app!</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
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
