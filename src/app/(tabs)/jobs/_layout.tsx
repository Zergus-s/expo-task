import { Stack } from "expo-router";

export default function JobsLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
