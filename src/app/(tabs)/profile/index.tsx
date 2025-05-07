import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import colorPalettes from "@shared/styles/colors";

import { ProfileCard } from "@entities/profile/ui/ProfileCard/ProfileCard";

import { useGetProfile } from "@features/profile/lib/useGetProfile";

import styles from "./ProfileScreen.styles";

export default function Profile() {
  const { isProfileDataLoading, profileData } = useGetProfile();
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const router = useRouter();

  const handleGoToSettings = () => router.push("/settings");

  if (isProfileDataLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {profileData ? <ProfileCard profile={profileData} /> : null}
      <Pressable
        style={[styles.settingsButton, { backgroundColor: colors.tint }]}
        onPress={handleGoToSettings}
      >
        <Text style={[styles.settingsButtonText, { color: colors.background }]}>
          Go to Settings
        </Text>
      </Pressable>
    </View>
  );
}
