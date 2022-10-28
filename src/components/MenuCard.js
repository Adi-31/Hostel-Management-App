import { View, Text, FlatList } from "react-native";
import { menu } from "../mockdata";
import { SIZES } from "../constants/theme";

const menuTitle = () => (
  <View
    style={{
      backgroundColor: "white",
      padding: 10,
    }}
  >
    <Text style={{ fontSize: SIZES.extraLarge, fontWeight: "500" }}>
      Recommended
    </Text>
  </View>
);

const MenuCard = () => {
  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      ListHeaderComponent={menuTitle}
    />
  );
};

export default MenuCard;
