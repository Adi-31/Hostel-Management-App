import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SampleLogin = () => {
  return (
    <View style={styles.container}>
      <Text>SampleLogin</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SampleLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});
