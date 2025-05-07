import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { ColorMode } from "@shared/model/general";
import colorPalettes from "@shared/styles/colors";

import styles from "./JobCard.styles";
import { JobCardProps } from "./JobCard.types";

export const JobCard = ({ job, colorMode, onPress }: JobCardProps) => {
  const colors = colorPalettes[colorMode];

  return (
    <Pressable
      testID="job-card-root"
      onPress={onPress}
      style={{ width: "100%" }}
    >
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
            testID="job-card-image"
            source={{ uri: job.jobTitle.imageUrl }}
            style={styles.image}
            contentFit="cover"
          />
          <View style={styles.headerText}>
            <Text
              testID="job-card-title"
              style={[styles.title, { color: colors.text }]}
            >
              {job.jobTitle.name}
            </Text>
            <Text
              testID="job-card-company"
              style={[styles.company, { color: colors.text }]}
            >
              {job.company.name}
            </Text>
          </View>
        </View>
        <Text
          testID="job-card-address"
          style={[styles.address, { color: colors.text }]}
        >
          {job.company.address.formattedAddress}
        </Text>
        <Text
          testID="job-card-wage"
          style={[styles.wage, { color: colors.accept }]}
        >
          ${((job.wagePerHourInCents ?? 0) / 100).toFixed(2)} / hr
        </Text>
        <Text
          testID="job-card-distance"
          style={[styles.distance, { color: colors.tint }]}
        >
          {job.milesToTravel.toFixed(1)} miles away
        </Text>
      </View>
    </Pressable>
  );
};
