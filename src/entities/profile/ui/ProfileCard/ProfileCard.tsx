import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { selectColorMode } from "@shared/api/generalSlice";
import colorPalettes from "@shared/styles/colors";

import { Profile } from "@entities/profile/model/profile";

import styles from "./ProfileCard.styles";

export const ProfileCard = ({ profile }: { profile: Profile }) => {
  const colorMode = useSelector(selectColorMode);
  const colors = colorPalettes[colorMode];
  const initials =
    (profile.firstName?.[0] || "").toUpperCase() +
    (profile.lastName?.[0] || "").toUpperCase();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.tabIconDefault,
        },
      ]}
    >
      <View style={styles.avatarContainer}>
        <View
          style={[
            styles.avatar,
            { backgroundColor: colors.tint, shadowColor: colors.tint },
          ]}
        >
          <Text style={[styles.avatarText, { color: colors.background }]}>
            {initials}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: colors.text }]}>
          {profile.firstName} {profile.lastName}
        </Text>
        <View style={styles.row}>
          <MaterialIcons name="email" size={18} color={colors.tint} />
          <Text style={[styles.email, { color: colors.text }]}>
            {profile.email}
          </Text>
        </View>
        {profile.phoneNumber && (
          <View style={styles.row}>
            <Feather name="phone" size={17} color={colors.tint} />
            <Text style={[styles.phone, { color: colors.text }]}>
              {profile.phoneNumber}
            </Text>
          </View>
        )}
        <View
          style={[styles.divider, { backgroundColor: colors.tabIconDefault }]}
        />
        <View style={styles.row}>
          <Entypo name="location-pin" size={18} color={colors.tint} />
          <Text style={[styles.address, { color: colors.text }]}>
            {profile.address.formattedAddress}
          </Text>
        </View>
        <View style={styles.row}>
          <Feather name="map-pin" size={16} color={colors.tint} />
          <Text style={[styles.distance, { color: colors.tint }]}>
            Max Job Distance: {profile.maxJobDistance} miles
          </Text>
        </View>
      </View>
    </View>
  );
};
