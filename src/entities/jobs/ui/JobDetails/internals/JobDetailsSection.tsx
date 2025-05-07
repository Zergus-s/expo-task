import React from "react";
import { View } from "react-native";

import { styles } from "../JobDetails.styles";
import { JobDetailsSectionProps } from "../JobDetails.types";

export const JobDetailsSection = ({
  icon,
  children,
  style,
}: JobDetailsSectionProps) => (
  <View style={[styles.sectionRow, style]}>
    <View style={styles.sectionIcon}>{icon}</View>
    <View style={[styles.section, styles.sectionContent]}>{children}</View>
  </View>
);
