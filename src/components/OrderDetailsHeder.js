import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import Ionicons from '@expo/vector-icons/Ionicons';



const OrderDetailsHeder = ({route, navigation}) => {
 // const { Itemid } = route.params;
  console.log(route)
  return (
    <View
      style={styles.container}
    >
      <View style={styles.backbutton}>
         {<TouchableOpacity
            onPress={() => navigation.navigate("OrderMainScreen")}
            >
            <Text>
              <Ionicons name="arrow-back-outline" size={32} color="white" />
           </Text>
            </TouchableOpacity> }

      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Order Id</Text></View>
    
         
    </View>
  );
};

export default OrderDetailsHeder;

const styles = StyleSheet.create({
  container : { flexDirection: "row", height: 75, backgroundColor: "#3358F9" },
  backbutton : {backgroundColor: '#3358F9', flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10},
  cartheaderview : {backgroundColor: '#3358F9', flex: 8, alignItems: 'flex-start', justifyContent: 'center',},
  cartheadertext : {fontSize: SIZES.large * 2 ,color: "white", fontWeight: "bold",}
})
