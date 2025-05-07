import React from "react";
import { StyleSheet, View } from "react-native";

import { JobsList } from "@entities/jobs/ui/JobsList/JobsList";

import { useGetJobs } from "@features/jobs/lib/useGetJobs";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
