import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";

export default function RootLayout() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb42fc4"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView>
          <StartGameScreen />
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
