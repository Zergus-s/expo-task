import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 12,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  headerText: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2,
    color: "#222",
  },
  company: {
    fontSize: 15,
    fontWeight: "500",
    color: "#444",
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  wage: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#4CAF50",
  },
  distance: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2f95dc",
  },
});
