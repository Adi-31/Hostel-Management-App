import { View, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuStackScreen from "./MenuStackScreen";
import OrderStackScreen from "./OrderStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import { MenuIcon, OrdersIcon, ProfileIcon } from "../assets/icons";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        height: 90,
        paddingBottom: Platform.OS === "ios" ? 25 : 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        let icon = "";
        if (route.name == "MenuStack") {
          icon = <MenuIcon />;
        } else if (route.name == "OrdersStack") {
          icon = <OrdersIcon />;
        } else {
          icon = <ProfileIcon />;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            style={{
              flex: 1,
              opacity: isFocused ? 1 : 0.4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>{icon}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="MenuStack" component={MenuStackScreen} />
      <Tab.Screen name="OrdersStack" component={OrderStackScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
