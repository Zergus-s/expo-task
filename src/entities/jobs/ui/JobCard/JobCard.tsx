import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";

import colorPalettes from "@shared/styles/colors";

import { Job } from "@entities/jobs/model/jobsTypes";

import styles from "./JobCard.styles";

export const JobCard = ({
  job,
  colorMode,
  onPress,
}: {
  job: Job;
  colorMode: "light" | "dark";
  onPress?: () => void;
}) => {
  const colors = colorPalettes[colorMode];

  return (
    <Pressable onPress={onPress} style={{ width: "100%" }}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.cardBackground,
            borderColor: colors.tabIconDefault,
          },
        ]}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: job.jobTitle.imageUrl }}
            style={styles.image}
            contentFit="cover"
          />
          <View style={styles.headerText}>
            <Text style={[styles.title, { color: colors.text }]}>
              {job.jobTitle.name}
            </Text>
            <Text style={[styles.company, { color: colors.text }]}>
              {job.company.name}
            </Text>
          </View>
        </View>
        <Text style={[styles.address, { color: colors.text }]}>
          {job.company.address.formattedAddress}
        </Text>
        <Text style={[styles.wage, { color: colors.accept }]}>
          ${((job.wagePerHourInCents ?? 0) / 100).toFixed(2)} / hr
        </Text>
        <Text style={[styles.distance, { color: colors.tint }]}>
          {job.milesToTravel.toFixed(1)} miles away
        </Text>
      </View>
    </Pressable>
  );
};
