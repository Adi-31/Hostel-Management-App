import { View, Text, TouchableOpacity } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";
import ProfileContent2 from "../components/ProfileContent2";
import ProfileDue from "../components/ProfileDue";
import ProfileTotDue from "../components/ProfileTotDue";
import ProfileWallet from "../components/ProfileWallet";
import ProfileLogout from "../components/ProfileLogout";
import MyStatusBar from "../components/MyStatusBar";
import { COLORS } from "../constants/theme";
import { CircleButton } from "../components/Button";

const UserInfoCard = () => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor: "white",
    }}
  >
    {/* left item  */}
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircleButton />
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          paddingVertical: 13,
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Anna</Text>
        <Text>anna@gmail.com</Text>
      </View>
    </View>
    {/* right item  */}
    <View
      style={{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity>
        <Text style={{ fontWeight: "700", color: COLORS.blue, fontSize: 14 }}>
          EDIT PROFILE
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
const Profile = () => {
  return (
    <>
      <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={{ flex: 9 }}>
        <ProfileHeader />
        {/* <ProfileHeader />
        <ProfileContent />
        <ProfileContent2 />
        <ProfileDue />
        <ProfileTotDue /> */}
        {/* <ProfileWallet /> */}
        {/* <ProfileLogout /> */}
        <UserInfoCard />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 15,
        }}
      >
        <ProfileLogout />
      </View>
    </>
  );
};

export default Profile;
