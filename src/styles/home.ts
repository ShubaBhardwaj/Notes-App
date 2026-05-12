import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 25,
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
  },

  headerLeftText2: {
    fontSize: 16,
    color: "#666",
    marginTop: 2,
  },
  
  Btn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 22,
    fontSize: 18,
    color: "#2D2D2D",
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 22,
    fontSize: 15,
    color: "#2D2D2D",
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
