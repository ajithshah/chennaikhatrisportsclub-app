import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  // Logo zoom animation
  const scale = useSharedValue(1);

  useEffect(() => {
    // Start the zoom in/out animation
    scale.value = withRepeat(
      withTiming(1.01, {
        duration: 3000,
        easing: Easing.inOut(Easing.sin),
      }),
      -1, // Infinite repetitions
      true // Reverse when complete (creates the pulsing effect)
    );
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2b5876", "#4e4376"]}
        style={styles.background}
      />

      {/* Content */}
      <Animated.View style={animatedLogoStyle}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Text style={styles.text}>
        Welcome to{"\n"}
        Chennai Khatri Sports Club
      </Text>
      <Text style={styles.launchingText}>Launching Soon</Text>

      {/* Developer credit */}
      <Text style={styles.developerText}>
        Developed by Shanthosh Sha, Ajith Sha
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#ffffff",
  },
  launchingText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
    marginTop: 5,
  },
  developerText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
    bottom: 20,
    textAlign: "center",
  },
});
