import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton, SquareButton } from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
// import SquareButton from "../components/SquareBtn";

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

const CartHeader = ({ navigation }) => {
  return (
    <View style={styles.cartHeadercontainer}>
      <View style={styles.cartHeaderbackbutton}>
        {
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.cartheaderview}>
        <Text style={styles.cartheadertext}>Cart</Text>
      </View>
    </View>
  );
};
function OptDinner() {
  return (
    <View style={styles.optDinnercontainer}>
      <View style={styles.optDinnercontainer1}>
        <View style={styles.optDinnerbuttonview}>
          <SquareButton />
          <Text style={styles.optDinneropt}> Opt for Dinner</Text>
        </View>
        <View style={styles.optDinnerfoodview}>
          <Text style={styles.optDinnerfoodtext}>
            The food marked as dinner in your current cart will be marked as
            your prefference for dinner too..{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}
const Confirm = () => {
  return (
    <View>
      <View style={styles.confirmcontainer}>
        <View style={styles.confirmsubview1}>
          <Text> 2 Items </Text>
        </View>

        <View style={styles.confirmsubview2}>
          <Text> Rs 120</Text>
        </View>
      </View>

      <View style={styles.confirmCaution}>
        <Text style={styles.confirmCautiontext}>
          {" "}
          Once you confirm your order, your order will be sent to canteen and
          food will be prepared soon{" "}
        </Text>
      </View>

      <View style={styles.confirmbutton}>
        <Text style={{ color: "white" }}> Confirm Order</Text>
      </View>
    </View>
  );
};
const Cart = ({ navigation }) => {
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
export default Cart;

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

  cartHeadercontainer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "#3358F9",
  },
  cartHeaderbackbutton: {
    backgroundColor: "#3358F9",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cartheaderview: {
    backgroundColor: "#3358F9",
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cartheadertext: {
    fontSize: SIZES.large * 2,
    color: "white",
    fontWeight: "bold",
  },

  optDinnercontainer: { backgroundColor: "white", padding: 10, marginTop: 10 },
  optDinnercontainer1: { borderRadius: 10, backgroundColor: "#F5B80D" },
  optDinnerbuttonview: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  optDinneropt: { fontSize: 25, fontWeight: "bold" },
  optDinnerfoodview: { alignItems: "center", justifyContent: "center" },
  optDinnerfoodtext: { fontSize: 10, marginLeft: 35 },

  confirmcontainer: {
    flexDirection: "row",
    backgroundColor: "#D7F4E7",
    padding: 10,
  },
  confirmsubview1: { flex: 1 },
  confirmsubview2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  confirmCaution: {
    backgroundColor: "#D7F4E7",
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
  },
  confirmCautiontext: {
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmbutton: {
    backgroundColor: "#32BA7C",
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
