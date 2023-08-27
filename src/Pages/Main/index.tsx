import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container, ContainerIcon, IconBtn, Title } from "./style";
import { colors } from "../../styles";

const Main: React.FC = () => {

  const navigation = useNavigation();
  const handleGoToRegister = () => {
    navigation.navigate("Main");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.BLACK} barStyle="default"/>
      <Header />
      <Container>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users">
          <FontAwesome5 name="users" size={60} color={ colors.ACCENT }/>
        </IconBtn>
          <Title>
            Usuários
          </Title>
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="map">
          <FontAwesome name="map-o" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title>
            Rotas
          </Title>
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users">
          <FontAwesome name="bar-chart" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title>
            Relatorios
          </Title>
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users">
          <AntDesign name="dashboard" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title>
            Dashboard
          </Title>
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users">
          <AntDesign name="copy1" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title>
            Pedidos
          </Title>
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users">
          <AntDesign name="calendar" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title>
            Agendados
          </Title>  
        </ContainerIcon>
        <ContainerIcon>
        <IconBtn onPress={handleGoToRegister} aria-label="users" style={{ right: 116 }}>
          <Entypo name="users" size={60} color={colors.ACCENT}/>
        </IconBtn>
          <Title style={{ right: 116 }}>
            Clientes
          </Title>
        </ContainerIcon>
      </Container>
      <Footer />
    </SafeAreaView>
  );
};
export default Main;