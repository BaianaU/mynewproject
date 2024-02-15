import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameComponent from "./components/GameComponent";

/**
 * Huvudkomponenten för applikationen.
 * @returns {JSX.Element} JSX-element för hela applikationen.
 */

const App = () => {
  return (
    <View style={styles.container}>
      <GameComponent />
    </View>
  );
};

/**
 * Stilmall för komponenten.
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default App;



