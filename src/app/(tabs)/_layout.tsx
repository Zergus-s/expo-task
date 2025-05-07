import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import colorPalettes from "@shared/styles/colors";
import { AppHeader } from "@shared/ui/AppHeader/AppHeader";

import { useGetProfile } from "@features/profile/lib/useGetProfile";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const insets = useSafeAreaInsets();
  const { profileData } = useGetProfile();
  const profileName = profileData
    ? `${profileData.firstName} ${profileData.lastName}`
    : "";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        header: () => <AppHeader profileName={profileName} />,
        headerStyle: { backgroundColor: "#000" },
        headerTitle: "",
        tabBarStyle: {
          paddingBottom: insets.bottom + 4,
          paddingTop: 4,
          height: 56 + insets.bottom,
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.tabIconDefault,
        },
      }}
    >
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Job List",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
