import { View, Text, SafeAreaView } from "react-native";
import Card from "./Card";

const Cards = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", marginVertical: 6 }}>
      <Card />
    </SafeAreaView>
  );
};

export default Cards;
