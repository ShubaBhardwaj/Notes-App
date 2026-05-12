import { StyleSheet } from "react-native";

export const getNavbarStyles = (theme: any) => StyleSheet.create({
  navbar: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: 140,
    paddingHorizontal: 12,
    paddingVertical: 10,

    backgroundColor: theme.text,

    borderRadius: 999,
  },

  smallBtn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: theme.buttonBackground,

    alignItems: "center",
    justifyContent: "center",
  },

  addBtn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: theme.buttonBackground,

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
