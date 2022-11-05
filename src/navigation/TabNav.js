import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuStack from "./MenuStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";
import { MenuIcon, OrdersIcon, ProfileIcon } from "../assets/icons";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        height: 65,
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
        if (route.name == "Menu") {
          icon = <MenuIcon />;
        } else if (route.name == "Orders") {
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
            // accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={options.tabBarLabel}
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
      <Tab.Screen name="Menu" component={MenuStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
