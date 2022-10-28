import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

import { Login, MenuPage } from "./src/screens";

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("Details")}
    />
  </View>
);

const Details = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Details!</Text>
  </View>
);

const MenuStack = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <MenuStack.Screen name="Home" component={Home} />
    <MenuStack.Screen name="Details" component={Details} />
  </MenuStack.Navigator>
);
const OrdersStack = createStackNavigator();

const OrdersStackScreen = () => (
  <OrdersStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <OrdersStack.Screen name="Home" component={Home} />
    <OrdersStack.Screen name="Details" component={Details} />
  </OrdersStack.Navigator>
);
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <ProfileStack.Screen name="Home" component={Home} />
    <ProfileStack.Screen name="Details" component={Details} />
  </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();

const LoginStack = createStackNavigator();

export default App = () => {
  const isSignedIn = true;
  return isSignedIn ? (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="MenuStack" component={MenuStackScreen} />
        <Tab.Screen name="OrdersStack" component={OrdersStackScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <LoginStack.Screen name="Login" component={Login} />
    </NavigationContainer>
  );
};
