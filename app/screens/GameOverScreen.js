import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { Colors } from "@/constants/theme";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/success.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onClick={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "Inter_300Light",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "Inter_300Light",
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
