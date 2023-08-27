import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderContainer, MenuIcon, Title,  } from "./style";

const Header = () => {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <MenuIcon name="menu-sharp" size={40} color="#201140" />
      </TouchableOpacity>
      {/* Título */}
      <Title>Yellow Route</Title>
    </HeaderContainer>
  );
};

export default Header;
