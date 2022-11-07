import { COLORS, SIZES } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
export const CircleButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {}}
    >
      {/* <Image
          source={imgUrl}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        /> */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    // position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
  }
})