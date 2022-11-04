import { View, Text, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Order from "../components/Order";


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
      <Stack.Screen name="OrderMainScreen" component={OrderMainScreen} />

    </Stack.Navigator>
  );
};

export default OrderStack;