import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsInfoRow = ({
  job,
  colors,
}: {
  job: any;
  colors: any;
}) => (
  <View style={styles.row}>
    <View
      style={[
        styles.infoBox,
        {
          backgroundColor: colors.tint + "22",
          borderColor: colors.tint,
        },
      ]}
    >
      <Text style={[styles.infoLabel, { color: colors.text }]}>Distance</Text>
      <Text style={[styles.infoValue, { color: colors.tint }]}>
        {job.milesToTravel.toFixed(1)}{" "}
        <Text style={{ fontSize: 13, color: colors.text }}>miles</Text>
      </Text>
    </View>
    <View
      style={[
        styles.infoBox,
        {
          backgroundColor: colors.accept + "22",
          borderColor: colors.accept,
        },
      ]}
    >
      <Text style={[styles.infoLabel, { color: colors.text }]}>
        Hourly Rate
      </Text>
      <Text style={[styles.infoValue, { color: colors.accept }]}>
        ${(job.wagePerHourInCents / 100).toFixed(2)}
      </Text>
    </View>
  </View>
);
