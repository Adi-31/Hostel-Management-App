import { View, Text, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Order from "../components/Order";
import OrderDetails from "../components/OrderDetails";

const OrderMainScreen = ({ navigation }) => (
     <Order />
);

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderMainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OrderMainScreen" component={Order} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />

    </Stack.Navigator>
  );
};

export default OrderStack;