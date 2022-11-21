import { View, Text,TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from "../constants/theme";
import walletcard from "../assets/images/walletcard.png";

const WalletHeader = ({ route, navigation }) => {
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
        <Text style={styles.orderDetailscartheadertext}>Wallet</Text>
      </View>
    </View>
  );
};

const AddMoney = () => {
  return (
    <TouchableOpacity
      style={styles.confirmbutton}
    >
    <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
        + Add Money 
      </Text>
    </TouchableOpacity>
  );
};
const RecentTransation =() =>{
  return (
    <View style ={{backgroundColor : "white"}}>
      <Text style ={{fontWeight : '700', fontSize : 18, paddingHorizontal: 10}}>Recent Transactions 💸</Text>
    </View>
  )
}
const WalletContent = () =>{
  return (
   <View >
      <View >
        <Image source={walletcard} style={{width : 338, height :180, margin : 10,marginTop :10, borderRadius:10, alignItems: "center",
    justifyContent: "center",}}/>
        <Text style={{position: 'absolute', fontSize: 24, paddingHorizontal : 30, paddingVertical : 30, color : "#FFFFFF", fontWeight: '700', }}>eCanteen Wallet</Text>
        <Text style={{position: 'absolute', fontSize: 14, paddingHorizontal : 30, paddingVertical : 105, color : "#FFFFFF", fontWeight: '400', }}>Wallet Balance</Text>
        <Text style={{position: 'absolute', fontSize: 40, paddingHorizontal : 30, paddingVertical : 118 , color : "#FFFFFF", fontWeight: '700', }}>₹1200</Text>
        <AddMoney/>
        <RecentTransation/>
      </View>
   </View>
  );
};
const Wallet = ({navigation}) => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View>
        <WalletHeader navigation={navigation}/>
        <WalletContent/>
      </View>
    </>
  );
};

export default Wallet;

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
  confirmbutton: {
    backgroundColor: "#32BA7C",
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 14,
    
  },

})