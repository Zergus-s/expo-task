import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import { i18n } from "@shared/i18n";
import { openInMaps } from "@shared/lib/openInMaps";
import colorPalettes from "@shared/styles/colors";

import { formatShift } from "../../lib/formatShift";
import { styles, stylesDynamic } from "./JobDetails.styles";
import { JobDetailsProps } from "./JobDetails.types";
import { JobDetailsActions } from "./internals/JobDetailsActions";
import { JobDetailsSection } from "./internals/JobDetailsSection";

export const JobDetails = ({ job, onAccept, onReject }: JobDetailsProps) => {
  const insets = useSafeAreaInsets();
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const [loading, setLoading] = useState<"accept" | "reject" | null>(null);

  if (!job) return null;

  const handleOpenInMaps = () => openInMaps(job);

  const handleAccept = async () => {
    setLoading("accept");
    try {
      await onAccept?.();
    } finally {
      setLoading(null);
    }
  };

  const handleReject = async () => {
    setLoading("reject");
    try {
      await onReject?.();
    } finally {
      setLoading(null);
    }
  };

  return (
    <View
      testID="job-details-root"
      style={[styles.root, { paddingBottom: insets.bottom }]}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.scrollView, { backgroundColor: colors.background }]}
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
          <View>
            <View style={styles.image}>
              <Image
                source={{ uri: job.jobTitle.imageUrl }}
                style={styles.image}
                contentFit="cover"
                accessibilityLabel={job.jobTitle.name}
              />
            </View>
          </View>
          <View style={styles.header}>
            <Text
              style={[styles.title, { color: colors.text }]}
              testID="job-details-title"
            >
              {job.jobTitle.name}
            </Text>
            <Text
              style={[styles.company, { color: colors.text }]}
              testID="job-details-company"
            >
              {job.company.name}
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>{i18n.jobDetails.distance}</Text>
              <Text style={styles.infoValue}>
                {job.milesToTravel.toFixed(1)}{" "}
                <Text style={styles.infoMilesUnit}>
                  {i18n.jobDetails.miles}
                </Text>
              </Text>
            </View>
            <View style={[styles.infoBox, styles.infoBoxRight]}>
              <Text style={styles.infoLabel}>{i18n.jobDetails.hourlyRate}</Text>
              <View style={styles.hourlyRateRow}>
                <Text style={[styles.infoValue, styles.infoDollar]}>
                  {i18n.jobDetails.dollar}
                </Text>
                <Text style={styles.infoValue}>
                  {(job.wagePerHourInCents / 100).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detailsContent}>
            <JobDetailsSection
              icon={
                <MaterialIcons
                  name="calendar-today"
                  size={32}
                  color={colors.tint}
                />
              }
            >
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                {i18n.jobDetails.shiftDates}
              </Text>
              {job.shifts.map((shift, idx) => (
                <View key={idx} style={styles.shiftRow}>
                  <Text style={{ color: colors.text }}>
                    {formatShift(shift.startDate, shift.endDate)}
                  </Text>
                </View>
              ))}
            </JobDetailsSection>
            <JobDetailsSection
              icon={
                <Entypo name="location-pin" size={36} color={colors.tint} />
              }
            >
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                {i18n.jobDetails.location}
              </Text>
              <Pressable
                style={styles.shiftRow}
                onPress={handleOpenInMaps}
                accessibilityRole="button"
                accessibilityLabel={`Open ${job.company.address.formattedAddress} in maps`}
              >
                <Text style={stylesDynamic.locationText(colors.text)}>
                  {job.company.address.formattedAddress}
                </Text>
              </Pressable>
              <Text style={stylesDynamic.locationDistance(colors.text)}>
                {job.milesToTravel.toFixed(2)} {i18n.jobDetails.milesFromSearch}
              </Text>
            </JobDetailsSection>
            {job.requirements && job.requirements.length > 0 && (
              <JobDetailsSection
                icon={<Feather name="tool" size={32} color={colors.tint} />}
              >
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  {i18n.jobDetails.requirements}
                </Text>
                {job.requirements.map((req, idx) => (
                  <View key={idx} style={styles.shiftRow}>
                    <Text style={{ color: colors.text }}>
                      {i18n.jobDetails.requirementPrefix} {req}
                    </Text>
                  </View>
                ))}
              </JobDetailsSection>
            )}
            {job.company.reportTo && (
              <JobDetailsSection
                icon={<Feather name="user" size={32} color={colors.tint} />}
              >
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  {i18n.jobDetails.reportTo}
                </Text>
                <View style={styles.shiftRow}>
                  <Text style={{ color: colors.text }}>
                    {job.company.reportTo.name}
                    {job.company.reportTo.phone
                      ? ` (${job.company.reportTo.phone})`
                      : ""}
                  </Text>
                </View>
              </JobDetailsSection>
            )}
            <JobDetailsActions
              loading={loading}
              onAccept={handleAccept}
              onReject={handleReject}
              colors={colors}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
