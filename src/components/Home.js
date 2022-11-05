import { View, Button, Platform, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import ScrollableMenu from "./ScrollableMenu";
import ViewCart from "./ViewCart";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollableMenu />
      <ViewCart navigation={navigation} />
    </View>
  );
};
export default Home;
