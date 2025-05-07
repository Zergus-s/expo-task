import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    centered: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    loadingText: {
      color: colors.text,
      marginTop: 12,
    },
    listContent: {
      padding: 16,
      backgroundColor: colors.background,
      flexGrow: 1,
    },
  });
