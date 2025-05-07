import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsReportTo = ({
  reportTo,
  colors,
}: {
  reportTo?: { name: string; phone?: string };
  colors: any;
}) =>
  reportTo ? (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Report To
      </Text>
      <View style={styles.shiftRow}>
        <Feather
          name="user"
          size={16}
          color={colors.tint}
          style={{ marginRight: 6 }}
        />
        <Text style={{ color: colors.text }}>
          {reportTo.name}
          {reportTo.phone ? ` (${reportTo.phone})` : ""}
        </Text>
      </View>
    </View>
  ) : null;
