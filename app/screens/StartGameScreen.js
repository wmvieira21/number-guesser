import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={() => {}}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={() => {}}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#38001cff",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 50, //SafeAreaView aplied on _Layout.tsx
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    gap: 16,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  textInput: {
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
