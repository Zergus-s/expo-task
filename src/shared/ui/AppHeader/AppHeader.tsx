import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./AppHeader.styles";
import { AppHeaderProps } from "./types/AppHeader.types";

export function AppHeader({ profileName }: AppHeaderProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View
      testID="app-header-root"
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={styles.leftRow}>
        <Text style={styles.logoText}>
          {t("app.swipejobs").slice(0, 5)}
          <Text style={styles.logoBold}>{t("app.swipejobs").slice(5)}</Text>
        </Text>
      </View>
      <Text testID="app-header-profile-name" style={styles.profileName}>
        {profileName || ""}
      </Text>
    </View>
  );
}
