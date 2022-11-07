import { View, Text, FlatList, StyleSheet } from "react-native";
import { menu } from "../mockdata";
import { SIZES } from "../constants/theme";

const menuTitle = () => (
  <View
    style={styles.container}
  >
    <Text style={styles.containertext}>
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

const styles=StyleSheet.create({
  container : { backgroundColor: "white", padding: 10 },
  containertext : { fontSize: SIZES.extraLarge, fontWeight: "500" }
})