import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Appearance, Pressable, Text, useColorScheme, View } from "react-native";
import { viewNoteStyles } from "../styles/view_note";
import { Colors } from "../utils/theme";

type ViewNotesProps = {
  title: string;
  content: string;
};
const View_notes = ({title, content}: ViewNotesProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === "dark" ? "dark" : "light"];
  const toggleTheme = () => {
    Appearance.setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <View style={viewNoteStyles(theme).container}> 
      <View style={viewNoteStyles(theme).header}>
        <Text style={viewNoteStyles(theme).headerTitle}>Notes</Text>
        <Pressable style={viewNoteStyles(theme).Btn} onPress={toggleTheme}>
          <Ionicons
            name={colorScheme === "dark" ? "create-outline" : "create"}
            size={28}
            color={theme.icon}
          />
        </Pressable>
      </View>

      <View style={viewNoteStyles(theme).contentContainer}>
        <Text style={viewNoteStyles(theme).title}>{title}</Text>
        <Text style={viewNoteStyles(theme).content}>{content}</Text>
      </View>
    </View>
  );
};

export default View_notes;
