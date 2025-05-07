import React from "react";
import { View } from "react-native";

import { JobsList } from "@entities/jobs/ui/JobsList/JobsList";

import { useGetJobs } from "@features/jobs/lib/useGetJobs";

import styles from "./JobsScreen.styles";

export default function JobsScreen() {
  const { jobsData, isJobsLoading, refetchJobs, isJobsFetching } = useGetJobs();

  return (
    <View style={styles.container}>
      <JobsList
        data={jobsData}
        isLoading={isJobsLoading}
        isFetching={isJobsFetching}
        onRefresh={refetchJobs}
      />
    </View>
  );
}
