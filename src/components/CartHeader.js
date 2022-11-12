import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const CartHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backbutton}>
        {
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  cartHeadercontainer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#3358F9",
  },
  cartHeaderbackbutton: {
    backgroundColor: "#3358F9",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cartheaderview: {
    backgroundColor: "#3358F9",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cartheadertext: {
    fontSize: SIZES.large * 2,
    color: "white",
    fontWeight: "bold",
  },
});
