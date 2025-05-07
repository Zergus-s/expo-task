import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 28,
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "400",
  },
  logoBold: {
    fontWeight: "600",
    color: "#fff",
  },
  profileName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
