import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Rubik_300Light,Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, Rubik_800ExtraBold, Rubik_900Black } from "@expo-google-fonts/rubik";
import Routes from "./src/routes/idex";
import light from "./src/theme/light";
import dark from "./src/theme/dark";
import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from "react-native";

export default function App() {

  let [ fontsLoaded, fontError ] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black
  });

  if (!fontsLoaded && !fontError) {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} color={"#0891b2"}/>
        <Text style={{ fontSize: 18, color: "#0891b2", fontFamily:"Rubik_400Regular"}}>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={light}>
        <StatusBar barStyle="default" />
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
}
