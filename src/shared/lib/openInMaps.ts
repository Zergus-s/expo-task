import { Alert, Linking, Platform } from "react-native";

export function openInMaps(job: {
  company: { address: { formattedAddress: string } };
}) {
  if (!job) return;
  const address = encodeURIComponent(job.company.address.formattedAddress);
  const url =
    Platform.OS === "ios"
      ? `http://maps.apple.com/?q=${address}`
      : `geo:0,0?q=${address}`;
  Linking.openURL(url).catch(() => {
    Alert.alert("Unable to open maps", job.company.address.formattedAddress);
  });
}
