import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import React from "react";
import SquareButton from "./SquareBtn";

export default function OptDinner() {
  return (
    <View style={styles.optDinnercontainer}>
      <View style={styles.optDinnercontainer1}>
        <View style={styles.optDinnerbuttonview}>
          <SquareButton />
          <Text style={styles.optDinneropt}> Opt for Dinner</Text>
        </View>
        <View style={styles.optDinnerfoodview}>
          <Text style={styles.optDinnerfoodtext}>
            The food marked as dinner in your current cart will be marked as
            your prefference for dinner too..{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optDinnercontainer: { backgroundColor: "white", padding: 10, marginTop: 10 },
  optDinnercontainer1: { borderRadius: 10, backgroundColor: "#F5B80D" },
  optDinnerbuttonview: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  optDinneropt: { fontSize: 25, fontWeight: "bold" },
  optDinnerfoodview: { alignItems: "center", justifyContent: "center" },
  optDinnerfoodtext: { fontSize: 10, marginLeft: 35 },
});
