import {
  View,
  Text,
  Button,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";

const Splash = ({ navigation }) => {
  const animation = useRef(null);
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  const [loaded, setLoaded] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#3358F9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 120,
      }}
    >
      {/* useEffect(
        setTimeout(() => {

        navigation.navigate("GetStarted"))
        }, 2000)
      
      , []) */}

      <LottieView
        autoPlay
        // loop={true}
        loop={false}
        ref={animation}
        style={{
          width: 350,
          height: 350,
          backgroundColor: "#3358F9",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../screens/animation.json")}
        onAnimationFinish={() => {
          // console.log("animation finished");
          setTimeout(() => {
            setLoaded(true);
            loaded ? navigation.navigate("GetStarted") : null;
          }),
            3000;
        }}
        // speed={1}
        // duration={2000}
        // progress={animationProgress.current}
      />
      <Text
        style={{
          color: "#F5B80D",
          fontSize: 50,
          paddingHorizontal: 7,
          fontWeight: "700",
        }}
      >
        e
        <Text
          style={{
            color: "white",
            fontSize: 50,
          }}
        >
          Canteen
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
        }}
        style={{ backgroundColor: "#F5B80D", padding: 10, borderRadius: 10 }}
      >
        <Text>Get Started</Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 60,
        }}
      >
        <Text style={{ color: "#FFFFFF", opacity: 0.5, fontWeight: "700" }}>
          a project by
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            opacity: 0.5,
            fontWeight: "700",
            fontSize: 18,
          }}
        >
          Diagon Alley
        </Text>
      </View>
    </View>
  );
};

export default Splash;
