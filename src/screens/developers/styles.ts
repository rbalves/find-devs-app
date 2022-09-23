import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 23,
    color: "#121214",
  },
});
