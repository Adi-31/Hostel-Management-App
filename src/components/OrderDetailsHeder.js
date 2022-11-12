import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const OrderDetailsHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderMainScreen")}
          >
            <Text>
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Order Id</Text>
      </View>
    </View>
  );
};

export default OrderDetailsHeader;

const styles = StyleSheet.create({
  orderDetailscontainer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#3358F9",
  },
  orderDetailsbackbutton: {
    backgroundColor: "#3358F9",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  orderDetailscartheaderview: {
    backgroundColor: "#3358F9",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  orderDetailscartheadertext: {
    fontSize: SIZES.large * 2,
    color: "white",
    fontWeight: "bold",
  },
});
