import { notesStyles } from "@/styles/notes";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { notesServices } from "../services/notes_storage";

const Create_notes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  type Note = {
    title: string;
    content: string;
  };
  const handleSave = async ({ title, content }: Note) => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }
    await notesServices.saveNote({ title, description: content });
    setTitle("");
    setContent("");
    alert("Note saved successfully");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* header  */}
        <View style={notesStyles.header}>
          {/* back button  */}
          <Pressable
            style={notesStyles.Btn}
            onPress={() => alert("Back button pressed, Navigation logic here will be implemet ") }
          >
            <Ionicons name="arrow-back-outline" size={28} color="black" />
          </Pressable>

          <Text style={notesStyles.headerTitle}>Create Note</Text>

          {/* save button  */}
          <Pressable
            style={notesStyles.Btn}
            onPress={() => handleSave({ title, content })}
          >
            <Ionicons name="save-outline" size={28} color="black" />
          </Pressable>
        </View>

        {/* text title  */}
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            placeholder="Title of the note"
            value={title}
            onChangeText={setTitle}
            style={notesStyles.title}
          />
        </View>

        {/* text content  */}
        <View style={{ paddingHorizontal: 20 }}>
          <TextInput
            placeholder="Write Your Notes..."
            value={content}
            onChangeText={setContent}
            style={notesStyles.content}
            textAlignVertical="top"
            multiline
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Create_notes;

const styles = StyleSheet.create({});
