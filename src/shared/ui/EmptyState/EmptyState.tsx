import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import styles from "./EmptyState.styles";
import { EmptyStateProps } from "./types/EmptyState.types";

type Props = EmptyStateProps & {
  testID?: string;
};

export function EmptyState({
  message,
  backgroundColor,
  textColor,
  onRefresh,
  testID = "empty-state",
}: Props) {
  const handleRefresh = onRefresh;
  const { t } = useTranslation();

  return (
    <View
      testID={`${testID}-root`}
      style={[
        styles.container,
        backgroundColor ? { backgroundColor } : undefined,
      ]}
    >
      <Text
        testID={`${testID}-message`}
        style={[styles.text, textColor ? { color: textColor } : undefined]}
      >
        {message}
      </Text>
      {onRefresh && (
        <Pressable
          testID={`${testID}-refresh-btn`}
          style={styles.button}
          onPress={handleRefresh}
        >
          <Text style={styles.buttonText}>{t("emptyState.refresh")}</Text>
        </Pressable>
      )}
    </View>
  );
}
