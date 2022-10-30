import { View, Text, FlatList, SafeAreaView } from "react-native";
// import menu from "../mockdata";
const menu = [
  {
    id: 1,
    title: "Porotta & Egg Curry",
    details: "2 Piece Porotta, 1 Portion of Egg Curry, Tea",
    cost: 30,
    image: "",
  },
  {
    id: 2,
    title: "Chappathi & Chicken Curry",
    details: "2 Piece Chappathi, 1 Portion of Chicken Curry, Tea",
    cost: 80,
    image: "",
  },
  {
    id: 3,
    title: "Masala Dosa",
    details: "1 Masala Dosa, Tea",
    cost: 20,
    image: "",
  },
];

const cardTitle = () => (
  <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 8 }}>
    Recommended
  </Text>
);

const Card = () => {
  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      style={{ backgroundColor: "white", width: "100%", padding: 10 }}
      ListHeaderComponent={cardTitle}
    />
  );
};

export default Card;
