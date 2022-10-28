import { View, Text, FlatList } from "react-native";
import { menu } from "../mockdata";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 10 }}>
      {/* search bar  */}
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          marginBottom: 15,
          padding: 10,
        }}
      >
        <Text>Search Bar</Text>
      </View>

      {/* menu cards  */}
      <MenuCard />
    </View>
  );
};

export default Menu;
