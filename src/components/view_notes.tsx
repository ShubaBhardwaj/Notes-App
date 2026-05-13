import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Appearance,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { viewNoteStyles } from "../styles/view_note";
import { Colors } from "../utils/theme";
import { notesServices } from "../services/notes_storage";

type ViewNotesProps = {
  id: string;
  title: string;
  content: string;
};
const View_notes = ({ id, title, content }: ViewNotesProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === "dark" ? "dark" : "light"];
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(title);
  const [editContent, setEditContent] = React.useState(content);

  const handleEditPress = () => {
    if (isEditing) {
      // Save changes
      editHandler({ id, title: editTitle, content: editContent });
      setIsEditing(false);
    } else {
      // Enter edit mode
      setIsEditing(true);
    }
  };

  const editHandler = ({ id, title, content }: ViewNotesProps) => {
    // Implement edit functionality here
    const updatedNotes = notesServices.updateNote(id, title, content);
  };

  return (
    <KeyboardAvoidingView
      style={viewNoteStyles(theme).container}
      behavior="padding"
      enabled={Platform.OS === 'android' && isEditing}
    >
      <View style={viewNoteStyles(theme).header}>
        {isEditing ? (
          <TextInput
            style={[viewNoteStyles(theme).headerTitle, { flex: 1, marginRight: 15 }]}
            value={editTitle}
            onChangeText={setEditTitle}
          />
        ) : (
          <Text style={[viewNoteStyles(theme).headerTitle, { flex: 1, marginRight: 15 }]} numberOfLines={1}>
            {editTitle}
          </Text>
        )}
        <Pressable style={viewNoteStyles(theme).Btn} onPress={handleEditPress}>
          <Ionicons
            name={isEditing ? "save-outline" : (colorScheme === "dark" ? "create-outline" : "create")}
            size={28}
            color={theme.icon}
          />
        </Pressable>
      </View>

      <ScrollView
        style={viewNoteStyles(theme).contentContainer}
        contentContainerStyle={{ paddingBottom: 120, flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets={true}
      >

        {isEditing ? (
          <TextInput
            style={viewNoteStyles(theme).content}
            value={editContent}
            onChangeText={setEditContent}
            multiline
          />
        ) : (
          <Text style={viewNoteStyles(theme).content}>{editContent}</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default View_notes;
