import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDescription = ({
  description,
  colors,
}: {
  description?: string;
  colors: any;
}) =>
  description ? (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Description
      </Text>
      <Text style={{ color: colors.text }}>{description}</Text>
    </View>
  ) : null;
