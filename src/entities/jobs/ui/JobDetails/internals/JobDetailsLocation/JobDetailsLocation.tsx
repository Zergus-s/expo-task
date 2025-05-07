import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsLocation = ({
  address,
  milesToTravel,
  colors,
  onPress,
}: {
  address: string;
  milesToTravel: number;
  colors: any;
  onPress: () => void;
}) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: colors.text }]}>Location</Text>
    <Pressable style={styles.shiftRow} onPress={onPress}>
      <Entypo
        name="location-pin"
        size={18}
        color={colors.tint}
        style={{ marginRight: 6 }}
      />
      <Text
        style={{
          color: colors.text,
          textDecorationLine: "underline",
          fontWeight: "500",
        }}
      >
        {address}
      </Text>
    </Pressable>
    <Text
      style={{
        color: colors.text,
        marginLeft: 24,
        marginTop: 2,
        fontSize: 13,
      }}
    >
      {milesToTravel.toFixed(2)} miles from your job search location
    </Text>
  </View>
);
