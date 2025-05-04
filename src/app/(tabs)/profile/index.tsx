import { selectColorMode } from "@config/store/generalSlice";
import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import colorPalettes from "@shared/styles/colors";

import { ProfileCard } from "@entities/profile/ui/ProfileCard/ProfileCard";

import { useGetProfile } from "@features/profile/lib/useGetProfile";

export default function Profile() {
  const { isProfileDataLoading, profileData } = useGetProfile();
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];

  if (isProfileDataLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {profileData ? (
        <ProfileCard profile={profileData} colorMode={colorMode} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    // backgroundColor is set dynamically
  },
});
