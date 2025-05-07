import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  section: {
    marginHorizontal: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
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
  actionBtnText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
    marginHorizontal: 18,
    marginBottom: 2,
  },
  company: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 18,
    marginBottom: 2,
  },
  shiftRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  image: {
    width: "100%",
    height: 170,
    backgroundColor: "#eee",
  },
});
