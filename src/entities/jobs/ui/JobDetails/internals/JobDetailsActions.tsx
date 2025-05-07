import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { i18n } from "@shared/i18n";

import { styles, stylesDynamic } from "../JobDetails.styles";

interface JobDetailsActionsProps {
  loading: "accept" | "reject" | null;
  onAccept: () => void;
  onReject: () => void;
  colors: any;
}

export const JobDetailsActions = ({
  loading,
  onAccept,
  onReject,
  colors,
}: JobDetailsActionsProps) => (
  <View style={styles.actionsRow}>
    <Pressable
      style={[styles.actionBtn, stylesDynamic.actionBtnReject(colors.reject)]}
      onPress={onReject}
      testID="job-details-reject-btn"
      accessibilityRole="button"
      accessibilityLabel="Reject job"
      disabled={loading !== null}
    >
      {loading === "reject" ? (
        <ActivityIndicator color={colors.reject} />
      ) : (
        <Text style={stylesDynamic.actionBtnRejectText(colors.reject)}>
          {i18n.jobDetails.noThanks}
        </Text>
      )}
    </Pressable>
    <Pressable
      style={[styles.actionBtn, stylesDynamic.actionBtnAccept(colors.accept)]}
      onPress={onAccept}
      testID="job-details-accept-btn"
      accessibilityRole="button"
      accessibilityLabel="Accept job"
      disabled={loading !== null}
    >
      {loading === "accept" ? (
        <ActivityIndicator color={colors.background} />
      ) : (
        <Text style={stylesDynamic.actionBtnAcceptText(colors.background)}>
          {i18n.jobDetails.illTakeIt}
        </Text>
      )}
    </Pressable>
  </View>
);
