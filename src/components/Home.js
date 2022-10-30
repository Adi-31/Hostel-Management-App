import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Button } from "react-native";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ScrollableMenu from "./ScrollableMenu";

const Home = ({ navigation }) => (
  <>
    <SafeAreaView style={{ backgroundColor: "#3358F9" }}>
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "#EFEFF0",
          height: "100%",
        }}
      >
        <Header />

        {/* <Text>Scrollable Menu</Text> */}
        <ScrollableMenu />
        <View style={{ backgroundColor: "#D7F4E7" }}>
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate("Details")}
            color="green"
          />
        </View>
      </View>
    </SafeAreaView>
  </>
);

export default Home;
