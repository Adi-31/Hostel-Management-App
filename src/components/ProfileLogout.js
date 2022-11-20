import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const ProfileLogout = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.red,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        marginHorizontal: 24,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
        LOG OUT
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileLogout;

const styles = StyleSheet.create({
  container: {
    // marginTop: 180,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E24C4B",
    borderRadius: 10,
  },
  containerText: { fontSize: 18, color: "white" },
});
