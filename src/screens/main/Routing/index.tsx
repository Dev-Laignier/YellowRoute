import React from "react";
import { VStack, Center, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Routing: React.FC = () => {
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
        <Center></Center>
      </ScrollView>
      <Footer />
    </VStack>
  );
};
export default Routing;
