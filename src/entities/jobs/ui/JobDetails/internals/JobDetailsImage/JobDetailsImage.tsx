import React from "react";
import { Image } from "react-native";

import { styles } from "../../JobDetails.styles";

export const JobDetailsImage = ({ imageUrl }: { imageUrl: string }) => (
  <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
);
