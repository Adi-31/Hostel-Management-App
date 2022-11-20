import { View, Text, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import React from "react";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>My Profile</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: { flexDirection: "row", backgroundColor: "#3358F9" },
  containerText: {
    fontWeight: "700",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 21,
    paddingLeft: 16,
  },
});
