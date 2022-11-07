import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";

const CartHeader = ({navigation}) => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.backbutton}>
         {<TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            >
            <Text> back </Text>
            </TouchableOpacity> }

      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text></View>
    
         
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container : { flexDirection: "row", height: 75, backgroundColor: "#3358F9" },
  backbutton : {backgroundColor: '#3358F9', flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10},
  cartheaderview : {backgroundColor: '#3358F9', flex: 8, alignItems: 'flex-start', justifyContent: 'center',},
  cartheadertext : {fontSize: SIZES.large * 2 ,color: "white", fontWeight: "bold",}
})
