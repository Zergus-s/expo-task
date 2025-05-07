import React from "react";
import { Text } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsTitle = ({
  title,
  colors,
}: {
  title: string;
  colors: any;
}) => <Text style={[styles.title, { color: colors.text }]}>{title}</Text>;
