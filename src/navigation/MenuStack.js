import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/Home";
import Details from "../components/Details";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MenuStack;
