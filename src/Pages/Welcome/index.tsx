import React from "react";
import Button from "../../Components/Button";
import { ImageBack, WContainer, WLine, WTextBottm, WTextTop } from "./style";
import { useNavigation } from "@react-navigation/native";

const Welcome: React.FC = () =>{
  
  const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate("Login");

  }
  
  const handleSignUp = () => {

    navigation.navigate("SignUp");
    
  }
  
  return(
    <ImageBack source={require("../../assets/image/RouteApp.png")} resizeMode="cover">
      <WContainer>
        <WTextTop> Crie e gerencie suas rotas </WTextTop>
        <Button onPress={handleLogin} title="Login"/>
        <Button onPress={handleSignUp} title="Sign Up"/>
        <WLine></WLine>
        <WTextBottm>Yellow route é o melhor assistente pessoal para gerenciar suas rotas</WTextBottm>
      </WContainer>
    </ImageBack>
  )
}

export default Welcome;