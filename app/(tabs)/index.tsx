import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeScreen() {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            contentFit="contain"
            transition={300}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.3)"]}
            style={styles.headerGradient}
          />
        </View>
      }
    >
      <Animated.View entering={FadeInUp.delay(100).duration(600)}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>
            Chennai Khatri Sports Club
          </ThemedText>
          <View
            style={[styles.titleUnderline, { backgroundColor: primaryColor }]}
          />
        </ThemedView>
      </Animated.View>

      <Animated.View
        entering={FadeInUp.delay(300).duration(600)}
        style={styles.contentContainer}
      >
        <LinearGradient
          colors={["rgba(161, 206, 220, 0.4)", "rgba(161, 206, 220, 0.1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.launchingBanner}
        >
          <ThemedText type="subtitle" style={styles.launchingText}>
            Launching Soon
          </ThemedText>
        </LinearGradient>

        <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <ThemedView style={styles.infoContainer}>
            <ThemedText style={styles.infoText}>
              We're working hard to bring you the best sports club experience in
              Chennai. Stay tuned for updates and exciting features!
            </ThemedText>
          </ThemedView>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(700).duration(600)}>
          <ThemedView style={styles.featureContainer}>
            <LinearGradient
              colors={["rgba(161, 206, 220, 0.2)", "rgba(29, 61, 71, 0.1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.featureHeaderBg}
            >
              <ThemedText type="defaultSemiBold" style={styles.featureTitle}>
                Coming Features
              </ThemedText>
            </LinearGradient>

            <View style={styles.featureList}>
              <View style={styles.featureItemContainer}>
                <View
                  style={[
                    styles.featureIcon,
                    { backgroundColor: primaryColor },
                  ]}
                >
                  <Ionicons name="calendar-outline" size={18} color="#fff" />
                </View>
                <ThemedText style={styles.featureItem}>
                  Event Registration
                </ThemedText>
              </View>

              <View style={styles.featureItemContainer}>
                <View
                  style={[
                    styles.featureIcon,
                    { backgroundColor: primaryColor },
                  ]}
                >
                  <Ionicons name="trophy-outline" size={18} color="#fff" />
                </View>
                <ThemedText style={styles.featureItem}>
                  Tournament Updates
                </ThemedText>
              </View>

              <View style={styles.featureItemContainer}>
                <View
                  style={[
                    styles.featureIcon,
                    { backgroundColor: primaryColor },
                  ]}
                >
                  <Ionicons name="people-outline" size={18} color="#fff" />
                </View>
                <ThemedText style={styles.featureItem}>
                  Member Directory
                </ThemedText>
              </View>

              <View style={styles.featureItemContainer}>
                <View
                  style={[
                    styles.featureIcon,
                    { backgroundColor: primaryColor },
                  ]}
                >
                  <Ionicons name="analytics-outline" size={18} color="#fff" />
                </View>
                <ThemedText style={styles.featureItem}>Live Scores</ThemedText>
              </View>
            </View>
          </ThemedView>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(900).duration(600)}>
          <LinearGradient
            colors={["rgba(161, 206, 220, 0.3)", "rgba(161, 206, 220, 0.1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.connectContainer}
          >
            <ThemedText type="defaultSemiBold" style={styles.connectTitle}>
              Stay Connected
            </ThemedText>

            <View style={styles.socialIcons}>
              <View
                style={[styles.socialIcon, { backgroundColor: primaryColor }]}
              >
                <Ionicons name="logo-facebook" size={22} color="#fff" />
              </View>
              <View
                style={[styles.socialIcon, { backgroundColor: primaryColor }]}
              >
                <Ionicons name="logo-instagram" size={22} color="#fff" />
              </View>
              <View
                style={[styles.socialIcon, { backgroundColor: primaryColor }]}
              >
                <Ionicons name="logo-twitter" size={22} color="#fff" />
              </View>
              <View
                style={[styles.socialIcon, { backgroundColor: primaryColor }]}
              >
                <Ionicons name="mail-outline" size={22} color="#fff" />
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      </Animated.View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  logo: {
    height: 180,
    width: 180,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    borderRadius: 2,
  },
  contentContainer: {
    gap: 24,
  },
  launchingBanner: {
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  launchingText: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  infoContainer: {
    backgroundColor: "rgba(161, 206, 220, 0.2)",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoText: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: 16,
  },
  featureContainer: {
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureHeaderBg: {
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  featureTitle: {
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  featureList: {
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  featureItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureItem: {
    fontSize: 16,
    flex: 1,
  },
  connectContainer: {
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  connectTitle: {
    fontSize: 18,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});
