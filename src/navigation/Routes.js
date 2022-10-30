import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./TabNav";

const Routes = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
