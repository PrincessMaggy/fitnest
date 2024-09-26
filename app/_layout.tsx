import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { AuthenticationContextProvider } from "@/context/AuthenticationContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://7a8844af21134f252643b05485620af5@o4507038565662720.ingest.us.sentry.io/4508018221514752",
});

export default function RootLayout() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-Black.ttf"),
        PoppinsItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
        PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
        Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
      });
    }
    loadFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    <ActivityIndicator style={styles.loader} color={Colors.brand.grad1} />;
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthenticationContextProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="launchscreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="onboardingscreens"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signupscreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profilecreationscreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="goalsscreens"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="loginscreen" options={{ headerShown: false }} />
            <Stack.Screen
              name="registrationsuccessscreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </AuthenticationContextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
});
