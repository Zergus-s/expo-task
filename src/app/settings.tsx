import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { selectColorMode, toggleColorMode } from "@shared/api/generalSlice";
import { ColorMode } from "@shared/model/general";
import { getColors } from "@shared/styles/colors";

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  const colors = getColors(colorMode);
  const { t } = useTranslation();

  const handleToggleColorMode = () => dispatch(toggleColorMode());

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        {t("settings.title")}
      </Text>
      <Pressable
        style={[styles.button, { backgroundColor: colors.tint }]}
        onPress={handleToggleColorMode}
      >
        <Text style={[styles.buttonText, { color: colors.background }]}>
          {t("settings.switchMode", {
            mode: colorMode === ColorMode.Light ? "Dark" : "Light",
          })}
        </Text>
      </Pressable>
      <Text style={[styles.modeText, { color: colors.text }]}>
        {t("settings.currentMode", { mode: colorMode })}
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
