import { StyleSheet } from "react-native";

export const getHomeStyles = (theme: any) => StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },

  headerBackground: {
    height: 180,
    // marginHorizontal: 20,
    marginTop: 0,
    borderRadius: 20,
    overflow: "hidden",
  },


  headerLeftSide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeftImage: {
    paddingRight: 10,
    paddingTop: 5,
  },
  headerLeftImageContent: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  headerLeftText: {
    flexDirection: "column",
    justifyContent: "center",
  },

  headerLeftText1: {
    fontSize: 20,
    fontWeight: "500",
    color: theme.text,
  },

  headerLeftText2: {
    fontSize: 16,
    color: theme.textSecondary,
    marginTop: 2,
  },
  
  Btn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: theme.buttonBackground,

    alignItems: "center",
    justifyContent: "center",
  },

  searchInput: {
    backgroundColor: theme.searchBackground,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 22,
    fontSize: 18,
    color: theme.text,
    marginBottom: 28,

    // for shadow in ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    // for shadow in android
    elevation: 2,
  },

  content: {
    backgroundColor: theme.card,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 22,
    fontSize: 15,
    color: theme.text,
    marginBottom: 28,
    textAlignVertical: "top",

    height: 400,

    // for shadow in ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    // for shadow in android
    elevation: 2,
  },
});
