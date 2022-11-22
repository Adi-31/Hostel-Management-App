import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button, SafeAreaView, Text } from "react-native";

import {
  Menu,
  Orders,
  Profile,
  OrderDetails,
  Cart,
  Token,
  Wallet,
  AddPayment,
} from "./screens";
import MyTabBar from "./components/MyTabBar";

const TestPage = ({ navigation }) => (
  <SafeAreaView>
    <Text>HI</Text>
    <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    <Button title="Go to TOken" onPress={() => navigation.navigate("Token")} />
  </SafeAreaView>
);

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="MenuStack"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen name="Menu" component={Menu} />
      <Tabs.Screen name="Orders" component={Orders} />
      <Tabs.Screen name="Profile" component={Profile} />
      {/* <Tabs.Screen name="TestPage" component={TestPage} /> */}
    </Tabs.Navigator>
  );
};
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="TabsScreen" component={TabsScreen} />
      <RootStack.Screen name="Cart" component={Cart} />
      <RootStack.Screen name="OrderDetails" component={OrderDetails} />
      <RootStack.Screen name="Token" component={Token} />
      <RootStack.Screen name="Wallet" component={Wallet} />
      <RootStack.Screen name="AddPayment" component={AddPayment} />
    </RootStack.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Routes;
