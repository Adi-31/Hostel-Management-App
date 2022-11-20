import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";

const Token = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.green,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyStatusBar backgroundColor={COLORS.green} barStyle="light-content" />
      <View
        style={{
          backgroundColor: "white",
          width: 250,
          height: 250,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.green, fontSize: 72, fontWeight: "700" }}>
          $130
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Token;
