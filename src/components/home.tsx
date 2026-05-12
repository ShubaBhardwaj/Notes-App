import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../components/Card";
import { notesServices } from "../services/notes_storage";
import { homeStyles } from "../styles/home";

type Notes = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const [allNotes, setAllNotes] = useState<Notes[]>([]);


  const getAllNotes = async () => {
    const notes = await notesServices.getNotes();
    setAllNotes(notes);
  };

  const handleDeleteNote = async (id: string) => {
    const updatedNotes = await notesServices.deleteNote(id);
    setAllNotes(updatedNotes);
  };

  const handleSearch = async (query: string) => {
    const notes = await notesServices.searchNotes(query);
    setAllNotes(notes);
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <FlatList
      data={allNotes}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 140,
        paddingTop: 20,
      }}
      ListHeaderComponent={
        <>
          {/* Header */}
          <View style={homeStyles.header}>
            {/* Header Left Side */}
            <View style={homeStyles.headerLeftSide}>
              {/* avatar image */}
              <View style={homeStyles.headerLeftImage}>
                <Image
                  source={require("../../assets/images/coverPhoto.png")}
                  style={homeStyles.headerLeftImageContent}
                />
              </View>

              {/* name and post */}
              <View style={homeStyles.headerLeftText}>
                <Text style={homeStyles.headerLeftText1}>Shubham Bhardwaj</Text>

                <Text style={homeStyles.headerLeftText2}>
                  Software Engineer
                </Text>
              </View>
            </View>

            {/* Header Right Side */}
            <View>
              <Pressable
                style={homeStyles.Btn}
                onPress={() => console.log("pressed")}
              >
                <Ionicons name="sunny-outline" size={28} color="black" />
              </Pressable>
            </View>
          </View>

          {/* Search bar */}
          {/* Search bar */}
          <View
            style={{
              paddingTop: 10,
              position: "relative",
            }}
          >
            <TextInput
              placeholder="Search notes..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={() => handleSearch(searchQuery)}
              returnKeyType="search"
              style={homeStyles.searchInput}
            />

            {/* Cross Icon */}
            {searchQuery.length > 0 && (
              <Pressable
                onPress={() => {
                  setSearchQuery("");
                  getAllNotes();
                }}
                style={{
                  position: "absolute",
                  right: 15,
                  top: 23,
                }}
              >
                <Ionicons name="close-circle" size={22} color="gray" />
              </Pressable>
            )}
          </View>
        </>
      }
      renderItem={({ item }) => (
        <Card
          title={item.title}
          description={item.description}
          date={item.createdAt}
          onDelete={() => handleDeleteNote(item.id)}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
};

export default Home;
