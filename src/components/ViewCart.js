import { View, Text, TouchableOpacity } from "react-native";
import Details from "./Details";

const ViewCart = ({ navigation }) => {
  return (
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
  );
};

export default ViewCart;
