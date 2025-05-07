import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsRequirements = ({
  requirements,
  colors,
}: {
  requirements?: string[];
  colors: any;
}) =>
  requirements && requirements.length > 0 ? (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Requirements
      </Text>
      {requirements.map((req, idx) => (
        <View key={idx} style={styles.shiftRow}>
          <Feather
            name="tool"
            size={16}
            color={colors.tint}
            style={{ marginRight: 6 }}
          />
          <Text style={{ color: colors.text }}>- {req}</Text>
        </View>
      ))}
    </View>
  ) : null;
