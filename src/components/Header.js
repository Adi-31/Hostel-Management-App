import { View, Text } from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 75,
        backgroundColor: "#3358F9",
      }}
    >
      {/* left side text  */}
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: SIZES.medium, color: "white", opacity: 0.5 }}>
          Good Morning
        </Text>
        <Text
          style={{
            fontSize: SIZES.large * 2,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Anna
        </Text>
      </View>
      {/* profile icon  */}
      <View
        style={{
          flex: 1,
          alignItems: "space-between",
          justifyContent: "center",
          // padding: 10,
          marginRight: 10,
        }}
      >
        <CircleButton />
      </View>
    </View>
  );
};

export default Header;
