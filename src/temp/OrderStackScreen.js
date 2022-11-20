import { createStackNavigator } from "@react-navigation/stack";
import { Orders, OrderDetails } from "../screens";

const OrderStack = createStackNavigator();

const OrderStackScreen = () => {
  return (
    <OrderStack.Navigator
      initialRouteName="Orders"
      screenOptions={{ headerShown: false }}
    >
      <OrderStack.Screen name="Orders" component={Orders} />
      <OrderStack.Screen name="OrderDetails" component={OrderDetails} />
    </OrderStack.Navigator>
  );
};

export default OrderStackScreen;
