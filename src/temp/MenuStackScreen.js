import { createStackNavigator } from "@react-navigation/stack";

import { Home, Details } from "../components";
import { Menu, Cart } from "../screens";

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  
  return (
    <MenuStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MenuStack.Screen name="Home" component={Menu} />
      <MenuStack.Screen name="Cart" component={Cart} />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;
