import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import colorPalettes from "@shared/styles/colors";
import { EmptyState } from "@shared/ui/EmptyState/EmptyState";

import { Job, JobsApiState } from "@entities/jobs/model/jobsTypes";

import { JobCard } from "../JobCard/JobCard";
import { getStyles } from "./JobsList.styles";
import { JobsListProps } from "./JobsList.types";

export const JobsList = ({
  data,
  isLoading,
  isFetching,
  onRefresh,
}: JobsListProps) => {
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const styles = getStyles(colors);
  const router = useRouter();

  if (isLoading && !isFetching) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.tint} />
        <Text style={styles.loadingText}>Loading jobs...</Text>
      </View>
    );
  }

  if (isFetching) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.tint} />
        <Text style={styles.loadingText}>Refreshing...</Text>
      </View>
    );
  }

  if (!data.ids.length) {
    return (
      <EmptyState
        message="No jobs found."
        backgroundColor={colors.background}
        textColor={colors.text}
        onRefresh={onRefresh}
      />
    );
  }

  return (
    <FlatList
      data={data.ids}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => {
        const handlePress = () => router.push(`/job?id=${item}`);
        return (
          <JobCard
            job={data.entities[item]}
            colorMode={colorMode}
            onPress={handlePress}
          />
        );
      }}
      onRefresh={onRefresh}
      refreshing={false}
      indicatorStyle={colorMode === "dark" ? "white" : "black"}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh}
          colors={[colors.tint]}
          progressBackgroundColor={colors.background}
          tintColor={colors.tint}
        />
      }
    />
  );
};
