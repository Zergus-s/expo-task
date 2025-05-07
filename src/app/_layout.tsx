import { RootState } from "@config/store/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import React from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { selectColorMode, setColorMode } from "@shared/api/generalSlice";
import { useColorScheme as useSystemColorScheme } from "@shared/styles/useColorScheme";

import { StoreProvider } from "../config/providers/StoreProvider";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StoreProvider>
        <RootLayoutNav />
      </StoreProvider>
    </SafeAreaProvider>
  );
}

function RootLayoutNav() {
  const colorMode = useSelector(selectColorMode);
  const dispatch = useDispatch();
  const systemColorScheme = useSystemColorScheme();

  React.useEffect(() => {
    if (systemColorScheme === "dark" || systemColorScheme === "light") {
      dispatch(setColorMode(systemColorScheme));
    }
  }, [systemColorScheme]);

  return (
    <ThemeProvider value={colorMode === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          redirect
          options={{
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#fff" },
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{
            title: "Settings",
            headerBackTitle: "Back",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#fff" },
          }}
        />
        <Stack.Screen
          name="job"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
