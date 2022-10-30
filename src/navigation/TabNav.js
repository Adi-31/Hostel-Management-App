import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuStack from "./MenuStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Menu" component={MenuStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
