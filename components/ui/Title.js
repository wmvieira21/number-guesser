import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.tittle}>{children}</Text>;
}

const styles = StyleSheet.create({
  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    borderColor: "white",
  },
});
