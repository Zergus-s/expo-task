import { selectColorMode, setColorMode } from "@config/store/generalSlice";
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
import { View } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { getColors } from "@shared/styles/colors";
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
    <StoreProvider>
      <RootLayoutNav />
    </StoreProvider>
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
    <SafeAreaProvider>
      <ThemeProvider value={colorMode === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" redirect />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen
            name="(tabs)/settings"
            options={{ title: "Settings" }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
