import { StyleSheet } from "react-native";

export const navbarStyles = StyleSheet.create({
  navbar: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: 140,
    paddingHorizontal: 12,
    paddingVertical: 10,

    backgroundColor: "#111",

    borderRadius: 999,
  },

  smallBtn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },

  addBtn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },

  clickaddBtn: {
  backgroundColor: "#4B8CFF",
  color: "white",
},
  clickhomeBtn: {
  backgroundColor: "#4B8CFF",
  color: "white",
},
});
