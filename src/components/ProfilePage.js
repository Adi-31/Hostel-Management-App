import { View, Text } from "react-native";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileDue from "./ProfileDue";
import ProfileTotDue from "./ProfileTotDue";
import ProfileWallet from "./ProfileWallet";
import ProfileLogout from "./ProfileLogout";


const ProfilePage = () => {
  return (
    <View>
      <ProfileHeader/>
      <ProfileContent/>
      <ProfileDue/>
      <ProfileTotDue/>
      <ProfileWallet/>
      <ProfileLogout/>
    </View>
  );
};

export default ProfilePage;
