import {
  Platform,
  StatusBar,
  Text,
  useColorScheme,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import Routes from "./src/navigation/Routes";
// import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./src/constants/theme";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
const App = () => {
  // const isDarkMode = useColorScheme() === "light";
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? "black" : "white",
  // };
  return (
    <View style={styles.container}>
      {/* <MyStatusBar backgroundColor={COLORS.blue} barStyle="light-content" /> */}
      <View style={styles.content}>
        <Routes />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
    // alignItems: "center",
    // justifyContent: "flex-end",
  },
});

export default App;
