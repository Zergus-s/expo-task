import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { JobDetails } from "src/entities/jobs/ui/JobDetails/JobDetails";
import { selectColorMode } from "src/shared/api/generalSlice";

import colorPalettes from "@shared/styles/colors";
import { AppHeader } from "@shared/ui/AppHeader/AppHeader";

import { useGetJobsQuery } from "@entities/jobs/api/jobsApi";

import { useGetProfile } from "@features/profile/lib/useGetProfile";

export default function Job() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { profileData } = useGetProfile();
  const profileName = profileData
    ? `${profileData.firstName} ${profileData.lastName}`
    : "";

  const { data } = useGetJobsQuery();
  const job = id && data?.entities?.[id];

  if (!job) {
    return (
      <View
        style={[
          styles.center,
          {
            backgroundColor: colors.background,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <AppHeader profileName={profileName} />
        <Text style={{ color: colors.text }}>Job not found.</Text>
      </View>
    );
  }

  return (
    <>
      <AppHeader profileName={profileName} />
      <JobDetails
        job={job}
        colors={colors}
        insets={insets}
        router={router}
        profileName={profileName}
      />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
