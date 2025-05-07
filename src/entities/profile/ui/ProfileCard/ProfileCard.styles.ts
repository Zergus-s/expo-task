import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    alignItems: "flex-start",
    borderRadius: 20,
    padding: 24,
    margin: 8,
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    borderWidth: 1,
    width: "100%",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 26,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
  },
  infoContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 6,
  },
  email: {
    fontSize: 16,
    marginLeft: 7,
    fontWeight: "500",
  },
  phone: {
    fontSize: 15,
    marginLeft: 7,
    fontWeight: "500",
  },
  address: {
    fontSize: 15,
    marginLeft: 7,
    flex: 1,
    flexWrap: "wrap",
  },
  distance: {
    fontSize: 15,
    marginLeft: 7,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    marginVertical: 10,
    width: "100%",
    borderRadius: 1,
  },
});
