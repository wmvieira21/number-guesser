import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
