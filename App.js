import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameComponent from "./components/GameComponent";

const App = () => {
  return (
    <View style={styles.container}>
      <GameComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default App;
