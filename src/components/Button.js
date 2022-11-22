import { COLORS, SIZES } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, StyleSheet, Text, View } from "react-native";
import PrflPic from "../assets/images/PrflPic.png";
import { useState } from "react";
export const CircleButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Profile");
      }}
    >
      <Image
        source={PrflPic}
        resizeMode="contain"
        style={{ width: 42, height: 42, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.yellow,
    // position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
  },

});
