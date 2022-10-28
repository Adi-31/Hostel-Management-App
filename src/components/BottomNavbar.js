import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { bottomNavBarList } from "../constants/dummy";
import { FONTS } from "../constants/theme";

const BottomNavbar = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",

        backgroundColor: "white",
        paddingVertical: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",

        paddingBottom: 45,
      }}
    >
      <Button
        title="Orders"
        style={{
          marginHorizontal: 35,
        }}
        color="gray"
        //   key={(item) => item}
        onPress={() => navigation.navigate("Orders")}
      ></Button>
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({});
