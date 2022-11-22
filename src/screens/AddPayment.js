import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from "../constants/theme";

const AddPaymentHeader = ({ route, navigation }) => {
  // const { Itemid } = route.params;
  console.log(route);
  return (
    <View style={styles.orderDetailscontainer}>
      <View style={styles.orderDetailsbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              {/* change the icon here to svg */}
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.orderDetailscartheaderview}>
        <Text style={styles.orderDetailscartheadertext}>Add Payment</Text>
      </View>
    </View>
  );
};

const AddPayment = ({ navigation }) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <AddPaymentHeader />
      <Text>Add payment page</Text>
    </>
  );
};

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

export default AddPayment;
