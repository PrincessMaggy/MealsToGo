import { StatusBar, StyleSheet, Text, View , SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
