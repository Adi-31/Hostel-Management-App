import { View, Text } from "react-native";
import React from "react";

const ProfileContent2 = () => {
  return (
    <View
      style={{ flexDirection: "row", padding: 10, backgroundColor: "#D7F4E7" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginLeft: 15,
        }}
      >
        <Text style={{ fontSize: 14, color: "#32BA7C" }}>
          Profile Incomplete
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 14, color: "#32BA7C" }}>Complete now</Text>
      </View>
    </View>
  );
};

export default ProfileContent2;
