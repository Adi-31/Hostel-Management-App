import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Header, CircleButton, BottomNavbar } from "../components";

import { COLORS, FONTS, SIZES } from "../constants/theme";

import Orders from "./Orders";
import Profile from "./Profile";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const MenuPage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <StatusBar> */}
        <MyStatusBar backgroundColor="#3358F9" barStyle="light-content" />
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
