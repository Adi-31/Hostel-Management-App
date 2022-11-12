import { View, Text } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import ProfileContent2 from "./ProfileContent2";
import ProfileDue from "./ProfileDue";
import ProfileTotDue from "./ProfileTotDue";
import ProfileWallet from "./ProfileWallet";
import ProfileLogout from "./ProfileLogout";

const Profile = () => {
  return (
    <View>
      <ProfileHeader />
      <ProfileContent />
      <ProfileContent2 />
      <ProfileDue />
      <ProfileTotDue />
      <ProfileWallet />
      <ProfileLogout />
    </View>
  );
};

export default Profile;
