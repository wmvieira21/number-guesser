import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ onClick, children }) {
  return (
    <Pressable
      onPress={onClick}
      android_ripple={{ color: "#ffabd6ff" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#77073fff",
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 18,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
