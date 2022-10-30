import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Header, CircleButton, BottomNavbar } from "../components";

import { COLORS, FONTS, SIZES } from "../constants/theme";
import { menu } from "../mockdata";

import Orders from "./Orders";
import Profile from "./Profile";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const MenuList = () => (
  <ScrollView style={{ flexGrow: 1, marginBottom: 50 }}>
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
      )}
      // ListHeaderComponent={header}
      style={{ marginHorizontal: 20, height: 800 }}
    />
    {/* <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
      )}
      // ListHeaderComponent={header}
      style={{ marginHorizontal: 20, height: 800 }}
    />
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
      )}
      // ListHeaderComponent={header}
      style={{ marginHorizontal: 20, height: 800 }}
    /> */}
  </ScrollView>
);

const MenuPage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <StatusBar> */}
        {/* <MyStatusBar backgroundColor="#3358F9" barStyle="light-content" /> */}
        <Header />
        <View style={{ backgroundColor: "yellow", height: "100%" }}>
          <MenuList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
