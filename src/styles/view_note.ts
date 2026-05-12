import { StyleSheet, Platform } from "react-native";

export const viewNoteStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: Platform.OS === 'android' ? 40 : 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
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
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 15,
  },
  content: {
    fontSize: 18,
    color: theme.text,
    lineHeight: 28,
  }
});
