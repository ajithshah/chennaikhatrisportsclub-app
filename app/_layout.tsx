import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DeveloperCredit from "../components/DeveloperCredit";
import SplashScreenComponent from "../components/SplashScreen";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Prepare the app (you can load fonts, make API calls, etc. here)
  useEffect(() => {
    async function prepare() {
      try {
        // Keep splash screen visible while we prepare resources
        await SplashScreen.preventAutoHideAsync();

        // Add any resources fetching logic here
        // For example, load fonts, make initial API calls, etc.

        // Artificial delay to showcase the splash screen (remove in production)
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onSplashFinish = useCallback(async () => {
    setShowSplash(false);
    await SplashScreen.hideAsync();
  }, []);

  if (!isReady) {
    return null;
  }

  if (showSplash) {
    return (
      <>
        <SplashScreenComponent onFinish={onSplashFinish} />
        <View style={styles.developerCreditContainer}>
          <DeveloperCredit />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
      </Stack>
      <View style={styles.developerCreditContainer}>
        <DeveloperCredit />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  developerCreditContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 999,
  }
});
