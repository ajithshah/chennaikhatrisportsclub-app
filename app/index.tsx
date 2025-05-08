import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the main app after authentication
  return <Redirect href="/(tabs)" />;
}
