import { View, SafeAreaView, Button } from "react-native";
import Header from "./Header";
import ScrollableMenu from "./ScrollableMenu";

const Home = ({ navigation }) => (
  <>
    <SafeAreaView
      style={{
        backgroundColor: "#3358F9",
      }}
    >
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "#EFEFF0",
          height: "100%",
          marginTop: Platform.OS === "android" ? 30 : 0,
        }}
      >
        <Header />

        {/* Main scrollable menu  */}
        <ScrollableMenu />
        {/* bottom navigate option to cart  */}
        <View
          style={{
            backgroundColor: "#D7F4E7",
            flex: Platform.OS === "android" ? 1 : "none",
          }}
        >
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
