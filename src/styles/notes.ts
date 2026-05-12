import { StyleSheet } from "react-native";

export const notesStyles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111",
  },

  Btn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
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
