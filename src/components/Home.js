import {
  View,
  SafeAreaView,
  Button,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import ScrollableMenu from "./ScrollableMenu";

// const Home = ({ navigation }) => (
//   <SafeAreaView
//     style={{
//       backgroundColor: "#3358F9",
//       // flex: 1,
//       // marginTop: Platform.OS,
//     }}
//   >
//     {/* <View
//       style={{
//         backgroundColor: "red",
//         // height: "100%",
//         marginTop: Platform.OS === "android" ? 30 : 0,
//         flex: 1,
//       }}
//     > */}
//     <Header />

//     {/* Main scrollable menu  */}
//     {/* <ScrollableMenu /> */}
//     {/* bottom navigate option to cart  */}
//     {/* <View
//         style={{
//           backgroundColor: "#D7F4E7",
//           // flex: Platform.OS === "android" ? 1 : "none",
//           // flexWrap: "wrap",
//         }}
//       >
//         <Button
//           title="Go to Cart"
//           onPress={() => navigation.navigate("Details")}
//           color="green"
//         />
//       </View> */}
//     {/* </View> */}
//   </SafeAreaView>
// );

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollableMenu />
      {/* <View style={{ backgroundColor: "green" }}> */}
      <View
        style={{
          backgroundColor: "#D7F4E7",
          height: 40,
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,

            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <Text style={{ color: "#32BA7C" }}>4 items in Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,

            alignItems: "flex-end",
            justifyContent: "center",
            // marginRight: 10,
            paddingRight: 10,
          }}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={{ color: "#32BA7C", fontSize: 16, fontWeight: "600" }}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};
export default Home;
