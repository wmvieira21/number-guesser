import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.tittle}>{children}</Text>;
}

const styles = StyleSheet.create({
  tittle: {
    fontFamily: "Inter_200ExtraLight",
    fontSize: 24,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    borderColor: "white",
  },
});
