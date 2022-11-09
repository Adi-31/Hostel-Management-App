import { Platform } from "react-native";
import Provider from "./src/navigation";
import { SafeAreaView } from "react-native";
import { COLORS } from "./src/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <Provider />
    </SafeAreaView>
  );
};

export default App;
