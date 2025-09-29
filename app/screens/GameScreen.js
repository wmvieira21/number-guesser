import PrimaryButton from "@/components/ui/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../../components/game/NumberContainer";
import Title from "../../components/ui/Title";

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(minBoundary, maxBoundary, exclude) {
  const rndNum =
    Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;
  if (rndNum === exclude) {
    return generateRandomBetween(minBoundary, maxBoundary, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userPickedNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userPickedNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userPickedNumber) ||
      (direction === "higher" && currentGuess > userPickedNumber)
    ) {
      Alert.alert("Play fair!", "Don't lie! You know that this is wrong...");
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onClick={nextGuessHandler.bind(this, "higher")}>
          +
        </PrimaryButton>
        <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
});
