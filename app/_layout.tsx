import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function RootLayout() {
  const [pickedNumber, setPickedNumber] = useState(null);

  function pickNumberHandler(number) {
    setPickedNumber(number);
  }

  let screen = <StartGameScreen onConfirmNumber={pickNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen userPickedNumber={pickedNumber} />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb42fc4"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.container}>
          {screen}
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
