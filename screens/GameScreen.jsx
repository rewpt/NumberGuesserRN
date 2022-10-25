import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const LOWER_BOUND = 1;
const UPPER_BOUND = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(
    LOWER_BOUND,
    UPPER_BOUND,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
    function nextGuessHandler() {}

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={}> + </PrimaryButton>
          <PrimaryButton onPress={}> - </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
