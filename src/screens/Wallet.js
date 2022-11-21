import { View, Text } from "react-native";
import React from "react";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";

const Wallet = () => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View>
        <Text>Wallet Page</Text>
      </View>
    </>
  );
};

export default Wallet;
