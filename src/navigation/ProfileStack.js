import { View, Text, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import ProfilePage from "../components/ProfilePage";

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
      initialRouteName="ProfilePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      {/* <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

export default ProfileStack;
