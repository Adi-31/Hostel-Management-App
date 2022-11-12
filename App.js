import { Platform } from "react-native";
import Routes from "./src/navigation/Routes";
import { SafeAreaView } from "react-native";
import { COLORS } from "./src/constants/theme";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <Routes />
    </SafeAreaView>
  );
};

export default App;
