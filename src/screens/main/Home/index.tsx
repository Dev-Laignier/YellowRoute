import React from "react";
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { HStack, Icon, IconButton, VStack } from "native-base";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Title } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type StackRoutes = {
  Welcome: undefined; // " Define type Welcome" screen
  Clientes: undefined; // "Define type Clientes" screen
};

const Home: React.FC = () => {
  
  const navigation: NavigationProp<StackRoutes> = useNavigation();

  return (
    <VStack
      flex={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"#f8f8f8"}
    >
      <Header />
      <HStack space={6}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="calendar"
            onPress={() => navigation.navigate("Welcome")}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={AntDesign}
                name="calendar"
                color={"#006BA1"}
              />
            }
          />
          <Title>Agenda</Title>
        </VStack>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="users"
            onPress={() => navigation.navigate("Clientes")}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={Entypo}
                name="users"
                color={"#006BA1"}
              />}
          />
          <Title>Clientes</Title>
        </VStack>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="dashboard"
            onPress={() => ""}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={AntDesign}
                name="dashboard"
                color={"#006BA1"}
              />
            }
          />
          <Title>Dashboard</Title>
        </VStack>
      </HStack>
      <HStack space={6}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="copy1"
            onPress={() => ""}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={AntDesign}
                name="copy1"
                color={"#006BA1"}
              />
            }
          />
          <Title>Pedidos</Title>
        </VStack>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="bar-chart"
            onPress={() => ""}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={FontAwesome}
                name="bar-chart"
                color={"#006BA1"}
              />
            }
          />
          <Title>Relatorios</Title>
        </VStack>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="map-o"
            onPress={() => ""}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon 
                size={20}
                as={FontAwesome}
                name="map-o"
                color={"#006BA1"}
              />
            }
          />
          <Title>Rotas</Title>
        </VStack>
      </HStack>
      <HStack space={6}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="user-friends"
            onPress={() => ""}
            m={4}
            w={70}
            h={70}
            _pressed={{
              bgColor: "#f8f8f8",
              _icon: {
                color: "#006BA190",
              },
            }}
            icon={
              <Icon
                size={20}
                as={FontAwesome5}
                name="user-friends"
                color={"#006BA1"}
              />
            }
          />
          <Title>Usuários</Title>
        </VStack>
      </HStack>
      <Footer />
    </VStack>
  );
};
export default Home;