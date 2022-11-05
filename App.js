import { Platform } from "react-native";
import Provider from "./src/navigation";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#3358F9",
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <Provider />
    </SafeAreaView>
  );
};

export default App;
