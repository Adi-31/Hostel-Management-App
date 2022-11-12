import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginHorizontal: 5,
        }}
      >
        <Button
          title="Sign-Up"
          color="white"
          style={{ borderRadius: 10 }}
        ></Button>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginHorizontal: 5,
        }}
      >
        <Button
          title="Login"
          color="white"
          // onPress={() => navigation.navigate("MenuPage", {})}
          style={{ borderRadius: 10 }}
        ></Button>
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
});
