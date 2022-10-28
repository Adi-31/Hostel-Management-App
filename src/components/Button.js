import { COLORS, SIZES } from "../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
export const CircleButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "yellow",
        // position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
      }}
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
