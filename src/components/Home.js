import { View, Button, Platform, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./Header";
import ScrollableMenu from "./ScrollableMenu";
import ViewCart from "./ViewCart";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollableMenu />
      <ViewCart navigation={navigation} />
    </View>
  );
};
export default Home;

const styles=StyleSheet.create({
  container : { flex: 1 }
})
