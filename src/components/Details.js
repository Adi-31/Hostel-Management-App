import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import OptDinner from "./OptDinner";
import Confirm from "./Confirm";

const listOfCart = [
  {
    id: 1,
    foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  },
  //  {
  //    id: 2,
  //    title: "Biriyani Rice",
  //  },
  //  {
  //   id: 1,
  //   foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 1,
  //   foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 1,
  //   foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 1,
  //   foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
  // {
  //   id: 1,
  //   foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
  // },
  // {
  //   id: 2,
  //   title: "Biriyani Rice",
  // },
];

const Details = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const CartContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.container2}>Porotta & Chicken Curry ..</Text>
          <Text style={styles.container2text}>
            {" "}
            2 porotta 2 chicken curry + tea
          </Text>
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.touch} onPress={decrement}>
            <Text style={styles.size}> -</Text>
          </TouchableOpacity>
          <View>
            <Text>{count}</Text>
          </View>

          <TouchableOpacity style={styles.touch} onPress={increment}>
            <Text style={styles.size}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rupee}>
          <Text>Rs 60</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 7 }}>
      <View>
        <CartHeader navigation={navigation} />
      </View>
      <ScrollView>
        <View style={{ flex: 2 }}>
          {/* <FlatList
            data={listOfCart}
            keyExtractor={(item) => item.id}
            renderItem={CartContent}
          /> */}
          <CartContent />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <OptDinner />
        </View>
      </ScrollView>
      <View
        style={{ flex: 3, alignItems: "flex-end", justifyContent: "flex-end" }}
      >
        <Confirm />
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 10 },
  container1: { flex: 3, backgroundColor: "white", padding: 8, marginLeft: 10 },
  container2: { fontWeight: "700", fontSize: 15 },
  container2text: { fontWeight: "400", fontSize: 10 },
  buttonview: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touch: { padding: 6 },
  size: { fontSize: 25 },
  rupee: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
