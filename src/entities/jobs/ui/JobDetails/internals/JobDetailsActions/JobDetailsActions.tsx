import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsActions = ({
  colors,
  router,
}: {
  colors: any;
  router: any;
}) => (
  <View style={styles.actionsRow}>
    <Pressable
      style={[styles.actionBtn, { backgroundColor: colors.reject + "cc" }]}
      onPress={() => router.back()}
    >
      <Text style={[styles.actionBtnText, { color: "#fff" }]}>No Thanks</Text>
    </Pressable>
    <Pressable
      style={[styles.actionBtn, { backgroundColor: colors.text }]}
      onPress={() => {
        /* Accept job logic here */
      }}
    >
      <Text style={[styles.actionBtnText, { color: colors.background }]}>
        I'll Take it
      </Text>
    </Pressable>
  </View>
);
