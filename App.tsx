import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import firebaseconfig from "./src/settings/Firebase/firebaseconfig";
import * as Font from "expo-font";
import Routes from "./src/routes/idex";
import light from "./src/theme/light";
import dark from "./src/theme/dark";
import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from "react-native";
import { color } from "native-base/lib/typescript/theme/styled-system";
//import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, Rubik_800ExtraBold, Rubik_900Black } from "@expo-google-fonts/rubik";

const app = initializeApp(firebaseconfig);

async function loadFonts(){
  await Font.loadAsync({
    "Rubik_Light": require("./src/assets/fonts/Rubik-Light.ttf"),
    "Rubik_Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik_Medium": require("./src/assets/fonts/Rubik-Medium.ttf"),
    "Rubik_Bold": require("./src/assets/fonts/Rubik-Bold.ttf"),
    "Rubik_Black": require("./src/assets/fonts/Rubik-Black.ttf"),
  })
}

export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch(error => console.error("Erro ao carregar as fontes", error))
  },[]);

  if (!fontsLoaded){
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} color="#0891b2"/>
        <Text style={{color:"#0891b2"}}>Carregando fontes...</Text>
      </View>
    );
  }

  // let [ fontsLoaded, fontError ] = useFonts({
  //   Rubik_300Light,
  //   Rubik_400Regular,
  //   Rubik_500Medium,
  //   Rubik_600SemiBold,
  //   Rubik_700Bold,
  //   Rubik_800ExtraBold,
  //   Rubik_900Black
  // });

  // if (!fontsLoaded && !fontError) {
  //   return(
  //     <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
  //       <ActivityIndicator size={"large"} color={"#0891b2"}/>
  //       <Text style={{ fontSize: 18, color: "#0891b2" }}>Carregando fontes...</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={light}>
        <StatusBar barStyle="default" />
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
}
