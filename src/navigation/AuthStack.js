import { View, Text } from "react-native";
import Splash from "./Splash";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./GetStarted";

const Stack = createStackNavigator();
const AuthStack = ({ isSignedIn }) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        isSignedIn={isSignedIn}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
