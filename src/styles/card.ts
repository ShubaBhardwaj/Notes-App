import { StyleSheet } from "react-native";

export const getCardStyles = (theme: any) => StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.card,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 0,
    
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.text,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: theme.textSecondary,
    lineHeight: 22,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: theme.deleteButtonBg,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  }
});