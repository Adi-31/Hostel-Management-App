import { createStackNavigator } from "@react-navigation/stack";

import { Home, Details } from "../components";
import { Menu, Cart } from "../screens";

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Menu} />
      <Stack.Screen name="Details" component={Cart} />
    </Stack.Navigator>
  );
};

export default MenuStack;
