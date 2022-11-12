import { createStackNavigator } from "@react-navigation/stack";
import { Orders, OrderDetails } from "../screens";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default OrderStack;
