import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameComponent = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Sten', 'Sax', 'Påse'];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handleChoice = (selectedChoice) => {
    const computerSelection = getRandomChoice();

    setPlayerChoice(selectedChoice);
    setComputerChoice(computerSelection);

    // Determine the winner
    if (selectedChoice === computerSelection) {
      setResult('Oavgjort!');
    } else if (
      (selectedChoice === 'Sten' && computerSelection === 'Sax') ||
      (selectedChoice === 'Sax' && computerSelection === 'Påse') ||
      (selectedChoice === 'Påse' && computerSelection === 'Sten')
    ) {
      setResult('Du vinner!');
    } else {
      setResult('Datorn vinner!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten, Sax, Påse</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => handleChoice(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
          <Text>Ditt val: {playerChoice}</Text>
          <Text>Datorns val: {computerChoice}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#3498db',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default GameComponent;
