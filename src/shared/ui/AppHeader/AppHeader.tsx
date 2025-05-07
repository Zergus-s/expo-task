import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./AppHeader.styles";
import { AppHeaderProps } from "./types/AppHeader.types";

export function AppHeader({ profileName }: AppHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.leftRow}>
        <Text style={styles.logoText}>
          swipe<Text style={styles.logoBold}>jobs</Text>
        </Text>
      </View>
      <Text style={styles.profileName}>{profileName || ""}</Text>
    </View>
  );
}
