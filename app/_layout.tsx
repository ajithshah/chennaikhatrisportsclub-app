import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
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
    return <SplashScreenComponent onFinish={onSplashFinish} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
