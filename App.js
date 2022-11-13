import { Platform } from "react-native";
import Routes from "./src/navigation/Routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/constants/theme";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        paddingTop: Platform.OS === "android" ? 0 : 35,
      }}
    >
      <Routes />
    </SafeAreaView>
  );
};

export default App;
