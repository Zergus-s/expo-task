import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    margin: 16,
    borderRadius: 6,
    borderWidth: 1,
    paddingBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 170,
    backgroundColor: "#eee",
  },
  header: {
    paddingVertical: 6,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginBottom: 0,
    gap: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  infoBox: {
    flex: 1,
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: 0,
    backgroundColor: "#2bc897",
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 80,
  },
  infoBoxRight: {
    alignItems: "flex-end",
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 2,
    opacity: 0.8,
  },
  infoValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  infoMilesUnit: {
    fontSize: 13,
  },
  hourlyRateRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoDollar: {
    fontSize: 14,
    marginRight: 4,
  },
  detailsContent: {
    padding: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  sectionIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  sectionContent: {
    marginHorizontal: 0,
    flex: 1,
  },
  section: {
    marginHorizontal: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  shiftRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 16,
    gap: 14,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  company: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 2,
    letterSpacing: 0.2,
  },
});

export const stylesDynamic = {
  locationText: (color: string): TextStyle => ({
    color,
    textDecorationLine: "underline",
    fontWeight: "500",
  }),
  locationDistance: (color: string): TextStyle => ({
    color,
    marginLeft: 0,
    marginTop: 2,
    fontSize: 13,
  }),
  actionBtnReject: (color: string): ViewStyle => ({
    borderWidth: 1,
    borderColor: color,
    backgroundColor: "transparent",
  }),
  actionBtnAccept: (color: string): ViewStyle => ({
    backgroundColor: color,
  }),
  actionBtnRejectText: (color: string): TextStyle => ({
    color,
    fontWeight: "bold",
    fontSize: 16,
  }),
  actionBtnAcceptText: (color: string): TextStyle => ({
    color,
    fontWeight: "bold",
    fontSize: 16,
  }),
};
