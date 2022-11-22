import { View, StyleSheet } from "react-native";
import { Header, ScrollableMenu, ViewCart } from "../components";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";

const Menu = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollableMenu />
        <ViewCart navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Menu;
