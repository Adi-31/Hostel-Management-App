import {
  View,
  Text,
  ScrollView,
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
import { CardAnimationContext } from "@react-navigation/stack";

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
    title: "Recommended",
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
  <View style={{ backgroundColor: "white" }}>
    <SearchBar />
    <Text
      style={{
        fontSize: 30,
        // marginLeft: 10,
        fontWeight: "600",
        marginBottom: 10,
      }}
    >
      Order Your Food 🍛
    </Text>
  </View>
);

const MenuItem1 = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      backgroundColor: "yellow",
      marginVertical: 7,
      padding: 8,
    }}
  >
    <Image source={porotta} />
    <View
      style={{ flexDirection: "column", marginBottom: 8, marginHorizontal: 6 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", marginVertical: 4 }}>
        {menu[0].title}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "400", marginVertical: 4 }}>
        {menu[0].details}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>₹{menu[0].cost}</Text>
    </View>
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 38,
        width: 38,
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 32 }}>+</Text>
    </View>
  </View>
);
const MenuItem2 = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      backgroundColor: "yellow",
      marginVertical: 7,
      padding: 8,
    }}
  >
    <Image source={chappathi} />
    <View
      style={{ flexDirection: "column", marginBottom: 8, marginHorizontal: 6 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", marginVertical: 4 }}>
        {menu[1].title}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "400", marginVertical: 4 }}>
        {menu[1].details}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>₹{menu[1].cost}</Text>
    </View>
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 38,
        width: 38,
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 32 }}>+</Text>
    </View>
  </View>
);
const MenuItem3 = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      backgroundColor: "yellow",
      marginVertical: 7,
      padding: 8,
    }}
  >
    <Image source={dosa} />
    <View
      style={{ flexDirection: "column", marginBottom: 8, marginHorizontal: 6 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", marginVertical: 4 }}>
        {menu[2].title}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "400", marginVertical: 4 }}>
        {menu[2].details}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>₹{menu[2].cost}</Text>
    </View>
    <View
      style={{
        backgroundColor: "green",
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        // marginTop: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 32 }}>+</Text>
    </View>
  </View>
);

const MainCard = ({ item }) => (
  <View
    style={{
      width: "100%",
      marginVertical: 8,
    }}
  >
    <View style={{ backgroundColor: "gray", padding: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.title} </Text>
    </View>
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
          backgroundColor: "orange",
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
          backgroundColor: "blue",
          padding: 7,
          justifyContent: "center",
        }}
      >
        <Text>Center item</Text>
      </View>
      {/* right item  */}
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
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
            backgroundColor: "limegreen",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("button pressed");
          }}
        >
          <Text style={{ fontSize: 25 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ScrollableMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // <ScrollView style={{ flexGrow: 1 }}>
    <FlatList
      data={listOfTitles}
      keyExtractor={(item) => item.id}
      renderItem={MainCard}
      style={{ backgroundColor: "white", paddingHorizontal: 10 }}
      ListHeaderComponent={Header}
      // ListFooterComponent={Cards}
    />
    // </ScrollView>
  );
};

export default ScrollableMenu;
