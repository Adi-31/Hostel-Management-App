import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./TabNav";
import AuthStack from "./AuthStack";
import { useState } from "react";

const Routes = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer>
      {isSignedIn ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
