import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SquareImage } from "../constants/assets";

const GetStarted = ({ navigation, isSignedIn }) => {
  return (
    <View
      style={{
        backgroundColor: "#3358F9",
        flex: 1,
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Image
        source={SquareImage}
        resizeMode="cover"
        style={{ width: "100%" }}
      />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          Let’s Get Started
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 10, opacity: 0.5 }}>
          Login/Signup with your Google Account
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 12,
            backgroundColor: "blue",
            height: 40,
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 14,
          }}
          onPress={() => (isSignedIn = true)}
        >
          <Text style={{ fontSize: 25, color: "white" }}>
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
