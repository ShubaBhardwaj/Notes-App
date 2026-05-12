import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, View, useColorScheme } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Create_notes from "../components/create_notes";
import Home from "../components/home";
import { getNavbarStyles } from "../styles/navbar";
import { Colors } from "../utils/theme";

export default function Index() {
  const inset = useSafeAreaInsets();
  const [screen, setScreen] = React.useState("home");
  
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const navbarStyles = getNavbarStyles(theme);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* screen */}
      {screen === "home" && <Home />}
      {screen === "create" && <Create_notes />}

      
      {/* bottom_nav */}
      <View style={[navbarStyles.navbar, { bottom: inset.bottom + 10 }]}>
        {/* HOME BUTTON */}
        <Pressable
          style={({ pressed }) => [
            navbarStyles.smallBtn,
            screen === "home" && navbarStyles.clickhomeBtn,
            { opacity: pressed ? 0.7 : 1 },
          ]}
          onPress={() => setScreen("home")}
        >
          <Ionicons name="home-outline" size={22} color={screen === "home" ? "white" : theme.icon}/>
        </Pressable>

        {/* CREATE BUTTON */}
        <Pressable
          style={({ pressed }) => [
            navbarStyles.addBtn, 
            screen === "create" && navbarStyles.clickaddBtn,
            { opacity: pressed ? 0.7 : 1 },
          ]}
          onPress={() => setScreen("create")}
        >
          <Ionicons name="add" size={28} color={screen === "create" ? "white" : theme.icon}/>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
