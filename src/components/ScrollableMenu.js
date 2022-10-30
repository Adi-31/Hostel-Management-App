import { View, Text, ScrollView } from "react-native";
import Cards from "./Cards";
import SearchBar from "./SearchBar";

const ScrollableMenu = () => {
  return (
    <ScrollView>
      <SearchBar />
      <Text
        style={{
          fontSize: 35,
          marginLeft: 10,
          fontWeight: "600",
        }}
      >
        Order Your Food 🍛
      </Text>
      <View style={{ flex: 1, backgroundColor: "#EFEFF0", padding: 10 }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </View>
    </ScrollView>
  );
};

export default ScrollableMenu;
