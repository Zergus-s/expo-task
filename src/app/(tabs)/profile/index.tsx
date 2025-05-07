import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import colorPalettes from "@shared/styles/colors";

import { ProfileCard } from "@entities/profile/ui/ProfileCard/ProfileCard";

import { useGetProfile } from "@features/profile/lib/useGetProfile";

export default function Profile() {
  const { isProfileDataLoading, profileData } = useGetProfile();
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const router = useRouter();
  const { t } = useTranslation();

  const handleGoToSettings = () => router.push("/settings");

  if (isProfileDataLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>{t("profile.loading")}</Text>
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
          {t("profile.goToSettings")}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
  },
  settingsButton: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  settingsButtonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
