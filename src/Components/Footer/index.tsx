import React from "react";
import { BackHandler, Alert, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { FooterContainer, FooterIcon } from "./style";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Função para sair do aplicativo
  const handleExitApp = () => {
    if (Platform.OS === "android") {
      Alert.alert(
        "Sair do aplicativo",
        "Tem certeza que deseja sair?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Sair",
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Sair do aplicativo",
        "Pressione o botão home para sair do aplicativo.",
        [
          {
            text: "OK",
            style: "default",
          },
        ],
        { cancelable: false }
      );
    }
  };

  // Função para navegar para a tela Main
  const handleGoToMain = () => {
    navigation.navigate(" Main");
  };

  return (
    <FooterContainer isMain={route.name === "Main"}>
      {/* Exibe o ícone "home-outline" em todas as telas, exceto na tela Main */}
      {route.name !== "Main" && (
        <TouchableOpacity onPress={handleGoToMain}>
          <FooterIcon name="home-outline" size={32} color="#201140" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      )}
      {/* Ícone para sair do aplicativo */}
      <TouchableOpacity onPress={handleExitApp}>
        <FooterIcon
          name="log-out-outline"
          size={32}
          color="#201140"
          style={{ marginRight: route.name === "Main" ? 8 : "auto" }}
        />
      </TouchableOpacity>
    </FooterContainer>
  );
};

export default Footer;