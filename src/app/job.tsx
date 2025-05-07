import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { JobDetails } from "src/entities/jobs/ui/JobDetails/JobDetails";
import { selectColorMode } from "src/shared/api/generalSlice";

import colorPalettes from "@shared/styles/colors";
import { AppHeader } from "@shared/ui/AppHeader/AppHeader";

import { useGetJobsQuery } from "@entities/jobs/api/jobsApi";

import { useAcceptJob } from "@features/jobActions/lib/acceptJob";
import { useRejectJob } from "@features/jobActions/lib/rejectJob";
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
  const { t } = useTranslation();

  const { acceptJob, isLoading: isAccepting } = useAcceptJob();
  const { rejectJob, isLoading: isRejecting } = useRejectJob();

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
        <Text style={{ color: colors.text }}>{t("job.notFound")}</Text>
      </View>
    );
  }

  return (
    <>
      <AppHeader profileName={profileName} />
      <JobDetails
        job={job}
        onAccept={async () => {
          try {
            await acceptJob(job.id);
            router.back();
          } catch (e) {
            // handle error (optional: show toast or alert)
          }
        }}
        onReject={async () => {
          try {
            await rejectJob(job.id);
            router.back();
          } catch (e) {
            // handle error (optional: show toast or alert)
          }
        }}
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
