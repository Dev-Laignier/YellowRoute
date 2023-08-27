import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { HeaderContainer, MenuIcon, Title,  } from "./style";

const Header = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <MenuIcon name="menu-sharp" size={40} color="#201140" />
      </TouchableOpacity>
      {/* Título */}
      <Title>Yellow Route</Title>
    </HeaderContainer>
  );
};

export default Header;
