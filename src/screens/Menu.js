import { View, StyleSheet } from "react-native";
import React from "react";
import { Header, ScrollableMenu, ViewCart } from "../components";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollableMenu />
      <ViewCart navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Menu;
