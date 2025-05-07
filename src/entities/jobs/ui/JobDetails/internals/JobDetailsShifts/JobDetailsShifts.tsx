import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsShifts = ({
  shifts,
  colors,
}: {
  shifts: any[];
  colors: any;
}) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: colors.text }]}>
      Shift Dates
    </Text>
    {shifts.map((shift, idx) => (
      <View key={idx} style={styles.shiftRow}>
        <MaterialIcons
          name="calendar-today"
          size={16}
          color={colors.tint}
          style={{ marginRight: 6 }}
        />
        <Text style={{ color: colors.text }}>
          {new Date(shift.startDate).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}{" "}
          -{" "}
          {new Date(shift.endDate).toLocaleString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </Text>
      </View>
    ))}
  </View>
);
