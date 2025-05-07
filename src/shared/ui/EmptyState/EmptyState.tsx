import React from "react";
import { Pressable, Text, View } from "react-native";

import styles from "./EmptyState.styles";
import { EmptyStateProps } from "./types/EmptyState.types";

export function EmptyState({
  message,
  backgroundColor,
  textColor,
  onRefresh,
}: EmptyStateProps) {
  const handleRefresh = onRefresh;

  return (
    <View
      style={[
        styles.container,
        backgroundColor ? { backgroundColor } : undefined,
      ]}
    >
      <Text style={[styles.text, textColor ? { color: textColor } : undefined]}>
        {message}
      </Text>
      {onRefresh && (
        <Pressable style={styles.button} onPress={handleRefresh}>
          <Text style={styles.buttonText}>Refresh</Text>
        </Pressable>
      )}
    </View>
  );
}
