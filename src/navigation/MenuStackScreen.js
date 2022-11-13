import { createStackNavigator } from "@react-navigation/stack";

import { Home, Details } from "../components";
import { Menu, Cart } from "../screens";

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  MenuStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map((route) => {
        if (route.routeName === "Home") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }

    return {
      tabBarVisible,
    };
  };
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
