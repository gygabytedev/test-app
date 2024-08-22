import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HomeScreen } from "./src/screens";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  const [loaded, error] = useFonts({
    "Monserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Monserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <HomeScreen />
    </GestureHandlerRootView>
  );
}
