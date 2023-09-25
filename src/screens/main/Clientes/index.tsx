import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Center, Icon, ScrollView, IconButton, Avatar, HStack, VStack } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Texto, TextoBTN } from "./styles";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import { useForm, Controller } from "react-hook-form"; // Import react-hook-form and related packages
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../settings/Firebase/firebaseconfig";
import { getAuth } from "firebase/auth";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AsyncStorage from "@react-native-community/async-storage";

const app = initializeApp(firebaseConfig); // Initialize the app with the Firebase configuration
const auth = getAuth(app); // Get the authentication configuration

type StackRoutes = {};

type FormDataProps = {
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  inscricao_estadual: string;
  email: string;
  phone: string;
  zip_code: string;
  street: string;
  number: string;
  complement: string;
  bairro: string;
  city: string;
  state: string;

  name: string;
  sobreNome: string;
  birthday: string;
};

const ClientSchema = yup.object({
  cnpj: yup.string().required("Campo obrigatorio").min(14, "CNPJ Invalido"),
  razao_social: yup.string().required("Campo obrigatorio"),
  nome_fantasia: yup.string().required("Campo obrigatorio"),
  inscricao_estadual: yup.string().required("Campo obrigatorio"),
  email: yup.string().required("Campo obrigatorio").email("E-mail invalido"),
  phone: yup.string().required("Campo obrigatorio").min(9, "Numero invalido"),
  zip_code: yup.string().required("Campo obrigatorio"),
  street: yup.string().required("Campo obrigatorio"),
  number: yup.string().required("Campo obrigatorio"),
  complement: yup.string().required("Campo obrigatorio"),
  bairro: yup.string().required("Campo obrigatorio"),
  city: yup.string().required("Campo obrigatorio"),
  state: yup.string().required("Campo obrigatorio"),

  name: yup.string().required("Campo obrigatorio"),
  sobreNome: yup.string().required("Campo obrigatorio"),
  birthday: yup.string().required("Campo obrigatorio"),
});

const ClientRegister = () => {
  const navigation: NavigationProp<StackRoutes> = useNavigation();

  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormDataProps>({
    resolver: yupResolver(ClientSchema),
  });

  const [showCommercials, setShowCommercials] = useState(false);
  const [showPersonals, setShowPersonals] = useState(false);

  const handleSave = () => {};
  const handleSearchCNPJ = () => {};

  return (
    <VStack
    flex={1}
    justifyContent={"space-between"}
    alignItems={"center"}
    bg={"#f8f8f8"}
  >
  <Header/>
    <ScrollView backgroundColor={"#fff"}>
      <Center>
        <Avatar
          bg="green.500"
          size={48}
          m={4}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <HStack
          justifyContent={"space-between"}
          w={"90%"}
          alignItems={"center"}
        >
          <Texto>Dados Comerciais</Texto>
          <TouchableOpacity
            onPress={() => setShowCommercials(!showCommercials)}
          >
            <Icon
              as={
                <AntDesign
                  name={showCommercials ? "up-square-o" : "down-square-o"}
                />
              }
              size={8}
              color={"#630d7ee2"}
            />
          </TouchableOpacity>
        </HStack>
        {showCommercials ? (
          <>
            <Controller
              control={control}
              name="cnpj"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="CNPJ"
                  onChangeText={onChange}
                  value={getValues("cnpj")}
                  errorMessage={errors.cnpj?.message}
                  InputRightElement={
                    <IconButton
                      onPress={handleSearchCNPJ}
                      m={1}
                      _icon={{ color: "#0891b2" }}
                      _pressed={{
                        bg: "#ffffff00",
                        _icon: { color: "#0891b280", size: 7 },
                      }}
                      icon={
                        <Icon
                          as={<MaterialIcons name="search" />}
                          size={8}
                          alignSelf={"center"}
                        />
                      }
                    />
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="razao_social"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Razão Social"
                  onChangeText={onChange}
                  value={getValues("razao_social")}
                  errorMessage={errors.razao_social?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="nome_fantasia"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Nome Fantasia"
                  onChangeText={onChange}
                  value={getValues("nome_fantasia")}
                  errorMessage={errors.nome_fantasia?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="inscricao_estadual"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Inscrição Estadual"
                  onChangeText={onChange}
                  value={getValues("inscricao_estadual")}
                  errorMessage={errors.inscricao_estadual?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={getValues("email")}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Telefone"
                  keyboardType="phone-pad"
                  onChangeText={onChange}
                  value={getValues("phone")}
                  errorMessage={errors.phone?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="zip_code"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="CEP"
                  keyboardType="number-pad"
                  onChangeText={onChange}
                  value={getValues("zip_code")}
                  errorMessage={errors.zip_code?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="street"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Logradouro"
                  onChangeText={onChange}
                  value={getValues("street")}
                  errorMessage={errors.street?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="number"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Número"
                  keyboardType="number-pad"
                  onChangeText={onChange}
                  value={getValues("number")}
                  errorMessage={errors.number?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Complemento"
                  onChangeText={onChange}
                  value={getValues("complement")}
                  errorMessage={errors.complement?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="bairro"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Bairro"
                  onChangeText={onChange}
                  value={getValues("bairro")}
                  errorMessage={errors.bairro?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Cidade"
                  onChangeText={onChange}
                  value={getValues("city")}
                  errorMessage={errors.city?.message}
                />
              )}
            />
            {/* Input para coletar o estado do cliente */}
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Estado"
                  onChangeText={onChange}
                  value={getValues("state")}
                  errorMessage={errors.state?.message}
                />
              )}
            />
          </>
        ) : (
          <></>
        )}
        <>
          <HStack
            justifyContent={"space-between"}
            w={"90%"}
            alignItems={"center"}
          >
            <Texto>Dados Pessoais</Texto>
            <TouchableOpacity onPress={() => setShowPersonals(!showPersonals)}>
              <Icon
                as={
                  <AntDesign
                    name={showPersonals ? "up-square-o" : "down-square-o"}
                  />
                }
                size={8}
                color={"#630d7ee2"}
              />
            </TouchableOpacity>
          </HStack>
          {showPersonals ? (
            <>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur } }) => (
                <InputForm
                  label="Nome"
                  onChangeText={onChange}
                  value={getValues("name")}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
            control={control}
            name="sobreNome"
            render={({ field: { onChange, onBlur } }) => (
              <InputForm
                label="Sobrenome"
                onChangeText={onChange}
                value={getValues("sobreNome")}
                errorMessage={errors.sobreNome?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="birthday"
            render={({ field: { onChange, onBlur } }) => (
              <InputForm
                label="Data de Nascimento"
                onChangeText={onChange}
                value={getValues("birthday")}
                errorMessage={errors.birthday?.message}
              />
            )}
          />
            </>
          ) : (
            <></>
          )}
        </>
        <Button
          onPress={handleSubmit(handleSave)}
          style={{ marginTop: 20 }}
          mb={24}
        >
          <TextoBTN>Salvar</TextoBTN>
        </Button>
      </Center>
    </ScrollView>
    <Footer/>
    </VStack>
  );
};

export default ClientRegister;
