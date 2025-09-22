import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";

export default function RootLayout() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <SafeAreaView>
        <StartGameScreen />
        <StatusBar style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
