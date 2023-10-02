import React from "react";
import { VStack, Center, ScrollView } from "native-base";
import { Text } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Settings: React.FC = () => {
  return (
    <VStack
      pl={"1%"}
      pr={"1%"}
      bg={"#F6C101"}
      flex={1}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Header />
      <ScrollView backgroundColor={"#F8F8F8"} flex={1} w={"99%"}>
        <Center>
            <Text style={{fontSize:32, marginTop: 300}}>
                Settings
            </Text>
        </Center>
      </ScrollView>
      <Footer />
    </VStack>
  );
};
export default Settings;
