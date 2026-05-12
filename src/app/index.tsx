import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Create_notes from "../components/create_notes";
import Home from "../components/home";
import { navbarStyles } from "../styles/navbar";

export default function Index() {
  const inset = useSafeAreaInsets();
  const [screen, setScreen] = React.useState("home");
  return (
    <SafeAreaView style={styles.container}>
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
          <Ionicons name="home-outline" size={22} color={screen === "home" ? "white" : "black"}/>
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
          <Ionicons name="add" size={28} color={screen === "create" ? "white" : "black"}/>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3FB",
  },
});
