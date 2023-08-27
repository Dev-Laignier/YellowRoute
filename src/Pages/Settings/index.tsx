import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Settings: React.FC = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, backgroundColor:"#D40", justifyContent: "center", alignItems: "center"}}>
        <Text style={{ fontSize: 60, color:"#fff", fontWeight: "bold" }}>
          Settings
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
  )
}
export default Settings;