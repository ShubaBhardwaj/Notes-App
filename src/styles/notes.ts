import { StyleSheet } from "react-native";

export const getNotesStyles = (theme: any) => StyleSheet.create({
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
    color: theme.text,
  },

  Btn: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: theme.buttonBackground,

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
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
