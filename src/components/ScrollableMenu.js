import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { downArrow, addIcon } from "../constants/icons";
import { COLORS } from "../constants/theme";
// import { porotta, chappathi, dosa } from "../constants/assets";
import porotta from "../assets/images/porotta.png";
import chappathi from "../assets/images/chappathi.png";
import dosa from "../assets/images/dosa.png";
import PlusIcon from "../assets/images/PlusIcon.png";

const DATA = [
  {
    title: "✨Recommended",
    data: [
      {
        id: 1,
        foodItem: "Pizza",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: porotta,
      },
      {
        id: 2,
        foodItem: "Burger",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
        img: chappathi,
      },
      {
        id: 3,
        foodItem: "Risotto",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 90,
        img: dosa,
      },
    ],
  },
  {
    title: "Sides",
    data: [
      {
        id: 4,
        foodItem: "French Fries",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 20,
        img: porotta,
      },
      {
        id: 5,
        foodItem: "Onion rings",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 70,
        img: chappathi,
      },
      {
        id: 6,
        foodItem: "Fried Shrimps",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 60,
        img: dosa,
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: 7,
        foodItem: "Water",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: dosa,
      },
      {
        id: 8,
        foodItem: "Coke",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: chappathi,
      },
      {
        id: 9,
        foodItem: "Beer",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 30,
        img: porotta,
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        id: 10,
        foodItem: "Cheese Cake",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 25,
        img: porotta,
      },
      {
        id: 11,
        foodItem: "Ice cream",
        details: "2 Piece Porotta, 1 Portion of ...",
        cost: 20,
        img: dosa,
      },
    ],
  },
];

const MenuItem = ({ item }) => (
  <View
    style={{
      marginVertical: 4,
      // backgroundColor: "#f9c2ff",
      paddingHorizontal: 10,
      // paddingVertical: 6,
      flexDirection: "row",
    }}
  >
    {/* left item  */}
    <View
      style={{
        // flex: 1,
        // backgroundColor: "orange",
        // justifyContent: "center",
        // alignItems: "center",
        padding: 10,
      }}
    >
      {/* <Text style={styles.title}>Image</Text> */}
      <Image
        source={item.img}
        resizeMode="contain"
        style={{ borderRadius: 10 }}
      />
    </View>
    {/* center item  */}
    <View
      style={{
        flex: 2,
        // backgroundColor: "cyan",
        flexDirection: "column",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "700" }}>{item.foodItem}</Text>

      <Text style={{ fontSize: 10, fontWeight: "400", marginBottom: 4 }}>
        {item.details}
      </Text>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: COLORS.green,
        }}
      >
        ₹{item.cost}
      </Text>
    </View>
    {/* right item  */}
    <View
      style={{
        flex: 1,
        // backgroundColor: "pink",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      {/* <View style={{}}> */}
      <Image source={PlusIcon} />
      {/* </View> */}
    </View>
  </View>
);
const SearchBar = () => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={styles.textinput}
        placeholderTextColor="#3C3C4399"
      />
    </View>
  );
};

const SectionListHeader = () => (
  <View style={{ backgroundColor: "white" }}>
    <SearchBar />
    <Text
      style={{
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 10,
      }}
    >
      Order Your Food 🍛
    </Text>
  </View>
);
const MenuCardTitle = ({ section: { title } }) => (
  <View style={{ flexDirection: "row", backgroundColor: "white" }}>
    <View style={{ flex: 3, paddingLeft: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
    </View>
    {/* <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 16,
      }}
    >
      <Text>{downArrow}</Text>
    </View> */}
  </View>
);
const ScrollableMenu = () => (
  <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 15 }}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <MenuItem item={item} />}
      renderSectionHeader={MenuCardTitle}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={SectionListHeader}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 4,
  },
  sectionHeader: {
    fontSize: 32,
    // backgroundColor: "white",
    // paddingTop: 10,
    padding: 7,
  },
  title: {
    fontSize: 24,
  },
  conatiner: { width: "100%" },
  textinput: {
    fontSize: 18,
    backgroundColor: "#7676801F",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default ScrollableMenu;
