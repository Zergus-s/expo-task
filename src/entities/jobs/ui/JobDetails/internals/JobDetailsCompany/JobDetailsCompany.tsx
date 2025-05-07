import React from "react";
import { Text } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsCompany = ({
  company,
  colors,
}: {
  company: string;
  colors: any;
}) => <Text style={[styles.company, { color: colors.text }]}>{company}</Text>;
