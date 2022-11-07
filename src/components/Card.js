import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Card</Text>
    </View>
  );
};

export default Card;
 
const styles = StyleSheet.create({
  container : { backgroundColor: "red", padding: 10 },
  text : { fontSize: 30 }
})