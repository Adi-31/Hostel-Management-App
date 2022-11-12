import { COLORS, SIZES } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, StyleSheet, Text, View } from "react-native";
import PrflPic from "../assets/images/PrflPic.png";
export const CircleButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Profile", {
          screen: "Profile",
        });
      }}
    >
      <Image
        source={PrflPic}
        resizeMode="contain"
        style={{ width: 42, height: 42 ,borderRadius:20}}
      />
    </TouchableOpacity>
  );
};
export const SquareButton = () => {
  return (
    <TouchableOpacity
      style={styles.conatainer2}
      onPress={() => {}}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.yellow,
    // position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
  },
  conatainer2: {
    width: 21,
    height: 21,
    backgroundColor: "#FDEBBC",
    marginTop: 5,
    borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F5B80D",
  },
});
