import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Appearance,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import Card from "../components/Card";
import { notesServices } from "../services/notes_storage";
import { getHomeStyles } from "../styles/home";
import { Colors } from "../utils/theme";

type Notes = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [allNotes, setAllNotes] = useState<Notes[]>([]);

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === "dark" ? "dark" : "light"];
  const homeStyles = getHomeStyles(theme);

  const toggleTheme = () => {
    Appearance.setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

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
                  source={require("../../assets/images/avatarImage.png")}
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
              <Pressable style={homeStyles.Btn} onPress={toggleTheme}>
                <Ionicons
                  name={
                    colorScheme === "dark" ? "moon-outline" : "sunny-outline"
                  }
                  size={28}
                  color={theme.icon}
                />
              </Pressable>
            </View>
          </View>

          {/* Cover Image */}
          <ImageBackground
            source={
              colorScheme === "dark"
                ? require("../../assets/images/coverImageDarkMode.png")
                : require("../../assets/images/coverImage.png")
            }
            style={homeStyles.headerBackground}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                padding: 20,
              }}
            >
              <Text style={{ 
                color: colorScheme === "dark" ? "white" : "black", 
                fontSize: 26, 
                fontWeight: "600",
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4
              }}>
                Organizing your notes
              </Text>
            </View>
          </ImageBackground>

          {/* Search bar */}
          <View
            style={{
              paddingTop: 10,
              position: "relative",
            }}
          >
            <TextInput
              placeholder="Search notes..."
              placeholderTextColor={theme.textSecondary}
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
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default Home;
