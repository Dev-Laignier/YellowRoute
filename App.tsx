import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import Routes from "./src/routes/idex";
import light from "./src/theme/light";
import dark from "./src/theme/dark";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={light}>
        <StatusBar barStyle="default" />
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
}
