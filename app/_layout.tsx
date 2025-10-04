import { Inter_100Thin } from "@expo-google-fonts/inter/100Thin";
import { Inter_200ExtraLight } from "@expo-google-fonts/inter/200ExtraLight";
import { Inter_300Light } from "@expo-google-fonts/inter/300Light";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded] = useFonts({
    // "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    // "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  function pickNumberHandler(number: any) {
    setPickedNumber(number);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds: number) {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  }
  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickNumberHandler} />;
  if (pickedNumber) {
    screen = (
      <GameScreen
        userPickedNumber={pickedNumber}
        onGameOver={gameOverHandler}
      />
    );
  }
  if (gameIsOver && pickedNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={pickedNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  if (!loaded) {
    return null;
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
