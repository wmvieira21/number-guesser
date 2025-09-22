import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
