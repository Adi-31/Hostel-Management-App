import { View, Text, Button, TouchableOpacity } from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";

const CartHeader = ({navigation}) => {
  return (
    <View
      style={{ flexDirection: "row", height: 75, backgroundColor: "#3358F9" }}
    >
      <View style={{backgroundColor: '#3358F9', flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10}}>
         {<TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            >
            <Text> back </Text>
            </TouchableOpacity> }

      </View>
      <View style={{backgroundColor: '#3358F9', flex: 8, alignItems: 'flex-start', justifyContent: 'center',}}>
        <Text style={{
            fontSize: SIZES.large * 2,
            color: "white",
            fontWeight: "bold",
          }}>Cart</Text></View>
    
         
    </View>
  );
};

export default CartHeader;
