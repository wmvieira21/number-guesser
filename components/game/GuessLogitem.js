import { Colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function GuessLogitem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent200,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logText: {
    fontFamily: "Inter_300Light",
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.primary800,
  },
});
