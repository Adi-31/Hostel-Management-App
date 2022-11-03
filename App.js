import { Platform, Text, View } from "react-native";
import Provider from "./src/navigation";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
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
      {/* <View style={{ backgroundColor: "blue" }}>
        <Text>Hello</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default App;
