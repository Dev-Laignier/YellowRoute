import React from "react";
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Center, HStack, Icon, IconButton, VStack, ScrollView, Container, View } from "native-base";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Title } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type StackRoutes = {
  Welcome: undefined; // " Define type Welcome" screen
  Clientes: undefined; // "Define type Clientes" screen
  Dashboard: undefined; // "Define type Dashboard" screen
  Agenda: undefined; // "Define type Agenda" screen
  Reports: undefined; // "Define type Reports" screen
  Requests: undefined; // "Define type Requests" screen
  Routing: undefined; // "Define type Routing" screen
  Schedule: undefined; // "Define type Schedule" screen
  Users: undefined; // "Define type Users" screen
};

const Home: React.FC = () => {
  
  const navigation: NavigationProp<StackRoutes> = useNavigation();

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
      <Center backgroundColor={"#F8F8F8"} flex={1} w={"99%"} justifyContent={"flex-start"}>
      <HStack space={6} mt={8}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="calendar"
            onPress={() => navigation.navigate("Agenda")}
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
            onPress={() => navigation.navigate("Dashboard")}
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
      <HStack space={6} mt={8}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="copy1"
            onPress={() => navigation.navigate("Requests")}
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
            onPress={() => navigation.navigate("Reports")}
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
            onPress={() => navigation.navigate("Routing")}
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
      <HStack space={6} mt={8}>
        <VStack alignItems={"center"}>
          <IconButton
            aria-label="users"
            onPress={() => navigation.navigate("Users")}
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
                p={1}
                as={FontAwesome5}
                name="users"
                color={"#006BA1"}
              />
            }
          />
          <Title>Usuário</Title>
        </VStack>
      </HStack>
      </Center>
      <Footer />
    </VStack>
  );
};
export default Home;