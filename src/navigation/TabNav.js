import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuStack from "./MenuStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "yellow",
          // height: "10%",
          // marginBottom: 10,
        },
        // to style the individual items inside the tab nav
        // tabBarItemStyle: {
        //   backgroundColor: "#00ff00",
        //   margin: 5,
        //   borderRadius: 10,
        // },
      }}
    >
      <Tab.Screen name="Menu" component={MenuStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
