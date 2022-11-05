import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
// import Card from "./Card";
import { porotta, chappathi, dosa } from "../constants/assets";
import SearchBar from "./SearchBar";
import AddIcon from "../assets/images/AddIcon.svg";
import { useState } from "react";
import { COLORS } from "../constants/theme";

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
  {
    id: 4,
    title: "Dosa",
    details: "1 Masala Dosa, Tea",
    cost: 20,
    image: "",
  },
];

const listOfTitles = [
  {
    id: 1,
    title: "✨Recommended",
  },
  {
    id: 2,
    title: "Bread items",
  },
  {
    id: 3,
    title: "Rice items",
  },
];

//  change the name of this header
const Header = () => (
  <View style={{ paddingHorizontal: 10, backgroundColor: "white" }}>
    <SearchBar />
    <Text
      style={{
        fontSize: 30,
        // marginLeft: 10,
        fontWeight: "700",
        marginBottom: 10,
      }}
    >
      Order Your Food 🍛
    </Text>
  </View>
);

const RightItem = () => {
  const cartItemsArray = [];
  const [cartItems, setCartItems] = useState(cartItemsArray);
  const icon1 = "+";
  const icon2 = "✔️";
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* add icon  */}

      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#32BA7C26",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          // opacity: 0.15,
          // position: "absolute",
          margin: 0,
        }}
        onPress={() => {
          console.log("button pressed");
          // setIcon("✔️");
          setButtonPressed((buttonPressed) => !buttonPressed);
          buttonPressed ? setCartItems(cartItemsArray.push("porotta")) : null;
          console.log(cartItemsArray);
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: COLORS.green,
            margin: 0,
            padding: 0,
            // backgroundColor: "red",
          }}
        >
          {buttonPressed ? icon1 : icon2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ChildCard = ({ items }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    {/* left item  */}
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={porotta} />
    </View>
    {/* center item  */}
    <View
      style={{
        flex: 2,
        backgroundColor: "white",
        padding: 7,
        paddingVertical: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700" }}>Title</Text>
      <Text style={{ fontSize: 14 }}>Description</Text>
      <Text style={{ fontSize: 20, color: COLORS.green, fontWeight: "700" }}>
        $80
      </Text>
    </View>
    {/* right item  */}
    <RightItem />
  </View>
);
const MainCard = ({ item }) => (
  <View
    style={{
      width: "100%",
      // marginVertical: item.id === 1 ? 0 : 8,
      marginBottom: 8,
      marginTop: item.id === 1 ? 8 : 0,
    }}
  >
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.title}</Text>
    </View>
    {/* child card */}
    <ChildCard items={item.items} />
    <ChildCard />
    <ChildCard />
  </View>
);

const ScrollableMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <FlatList
      data={listOfTitles}
      keyExtractor={(item) => item.id}
      renderItem={MainCard}
      style={{
        backgroundColor: "#D9D9D9",
        // paddingHorizontal: 10,
      }}
      ListHeaderComponent={Header}
    />
  );
};

export default ScrollableMenu;
