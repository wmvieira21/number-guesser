import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import GuessLogitem from "../../components/game/GuessLogitem";
import NumberContainer from "../../components/game/NumberContainer";
import InstructionText from "../../components/ui/InstructionText";
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

export default function GameScreen({ userPickedNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userPickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userPickedNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userPickedNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setRounds((prevRounds) => [newRndNumber, ...prevRounds]);
  }

  const guessRoundsListLength = rounds.length;

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.logsContainer}
          data={rounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogitem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            ></GuessLogitem>
          )}
        />
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  logsContainer: {
    marginTop: 16,
    flex: 1,
  },
  listContainer: { flex: 1, padding: 16 },
});
