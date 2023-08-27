import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container, IconBtn, MainContent, Title } from "./style";

const Main: React.FC = () => {

  const navigation = useNavigation();
  const handleGoToRegister = () => {
    navigation.navigate("Main");
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <MainContent>
          <IconBtn onPress={handleGoToRegister} aria-label="users">
            <FontAwesome5 name="users" size={60} color={"#201140"}/>
            <Title>
              Usuários
            </Title>
          </IconBtn>
          <IconBtn onPress={handleGoToRegister} aria-label="map">
            <FontAwesome name="map-o" size={60} color={"#201140"}/>
            <Title>
              Rotas
            </Title>
          </IconBtn>
          <IconBtn onPress={handleGoToRegister} aria-label="users">
            <FontAwesome name="bar-chart" size={60} color={"#201140"}/>
            <Title>
              Relatorios
            </Title>
          </IconBtn>
          <IconBtn onPress={handleGoToRegister} aria-label="users">
            <AntDesign name="dashboard" size={60} color={"#201144"}/>
            <Title>
              Dashboard
            </Title>
          </IconBtn>
          <IconBtn onPress={handleGoToRegister} aria-label="users">
            <AntDesign name="copy1" size={60} color={"#201144"}/>
            <Title>
              Pedidos
            </Title>
          </IconBtn>
          <IconBtn onPress={handleGoToRegister} aria-label="users">
            <AntDesign name="calendar" size={60} color={"#201144"}/>
            <Title>
              Agendados
            </Title>
          </IconBtn>
        </MainContent>
        <Footer />
      </SafeAreaView>
    </Container>
  );
};

export default Main;