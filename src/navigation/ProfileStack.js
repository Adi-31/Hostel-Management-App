import { View, Text, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => (
  <SafeAreaView>
    {/* <StatusBar /> */}
    <Text>Home Page</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate("Details")}
    />
  </SafeAreaView>
);
const Details = () => (
  <SafeAreaView>
    <Text>Details Page</Text>
  </SafeAreaView>
);

const Stack = createStackNavigator();

const ProfileStack = () => {
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

export default ProfileStack;
