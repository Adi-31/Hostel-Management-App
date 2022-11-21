import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileWallet = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            eCanteen Wallet
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 20 }}> > </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileWallet;
