import { createStackNavigator } from "@react-navigation/stack";

import { Home, Details } from "../components";

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
