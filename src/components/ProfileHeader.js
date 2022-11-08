import { View, Text } from 'react-native'
import { SIZES } from "../constants/theme";
import React from 'react'

const ProfileHeader = () => {
  return (
    <View style={{ flexDirection: "row", height: 75, backgroundColor: "#3358F9" }}>
      <Text style={{fontWeight:700,fontSize:18,
            color: "white",
            fontWeight: "bold",
            marginTop:35,
            marginLeft:20
          }}>My Profile</Text>
    </View>
  )
}

export default ProfileHeader