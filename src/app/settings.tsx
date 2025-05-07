import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { selectColorMode, toggleColorMode } from "@shared/api/generalSlice";
import { getColors } from "@shared/styles/colors";

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  const colors = getColors(colorMode);

  const handleToggleColorMode = () => dispatch(toggleColorMode());

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Settings Screen</Text>
      <Pressable
        style={[styles.button, { backgroundColor: colors.tint }]}
        onPress={handleToggleColorMode}
      >
        <Text style={[styles.buttonText, { color: colors.background }]}>
          Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
        </Text>
      </Pressable>
      <Text style={[styles.modeText, { color: colors.text }]}>
        Current mode: {colorMode}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  modeText: {
    marginTop: 16,
    fontSize: 16,
  },
});
