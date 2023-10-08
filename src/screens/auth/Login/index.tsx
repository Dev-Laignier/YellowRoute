import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { ActivityIndicator, Image } from "react-native"; // Import the React Native image component
import { Center, Icon, IconButton, ScrollView } from "native-base"; // Import the React Native Base components
import { TouchableOpacity } from "react-native-gesture-handler"; // Import TouchableOpacity to create a clickable button
import { Texto, Goback, Title, Animation, TextRecovery, ContainerRecovery, TextR } from "./styles"; // Import custom styles
import Button from "../../../components/Button"; // Import a custom button component
import Input from "../../../components/Input"; // Import a custom input component
import { Controller, useForm } from "react-hook-form"; // Import react-hook-form and related packages
import useLogin from "./useLogin";
import { FormDataProps } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./shemas";

const Login: React.FC = () => {

  const { checkAndFillStoredUser, handleForgotPassword, handleGoBack, handleLogin, handleRememberMe, showPassword, handleToggle } = useLogin();
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<FormDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const [ show, setShow ] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ toggle, setToggle ] = useState(true);

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Center>
        <Goback onPress={handleGoBack} activeOpacity={0.7}>
          <Image source={require("../../../assets/icon/seta.png")} />
        </Goback>
        <Animation>
          <LottieView
            autoPlay
            loop
            resizeMode="contain"
            speed={0.2}
            source={require("../../../assets/animation/Earth_Green_Blue.json")}
          />
        </Animation>
        <Title>
          Faça login com seu e-mail e senha
        </Title>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Email"
              onChangeText={onChange}
              value={getValues("email")}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Password"
              onChangeText={onChange}
              value={getValues("password")}
              errorMessage={errors.password?.message}
              type= {show ? "text" : "password" }
              InputRightElement={ 
                <IconButton onPress={() => setShow(!show)} m={2} 
                _icon={{ color: "#0891b2"}}
                _pressed={{ bg: "#ffffff00", _icon: { color: "#0891b280"}}}
                icon={<Icon as={<FontAwesome name={ show ? "eye" : "eye-slash"}/>} size={6} />}            
              />}
            />
          )}
        />
        <ContainerRecovery>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.6}>
            <FontAwesome name={ toggle ? "toggle-on" : "toggle-off" } size={32} style={{ color: "#630d7ee2" , marginLeft: 8 }}/>
          </TouchableOpacity>
          <TextR style={{ marginLeft: -34 }}>
            Lembrar de mim
          </TextR>
        <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6} >
          <TextRecovery>
            Recuperar senha?
          </TextRecovery>
        </TouchableOpacity>
        </ContainerRecovery>
        <Button onPress={handleSubmit(handleLogin)} mb={12}>
        {loading ? (
            <ActivityIndicator color="#0891b2" size={32} /> // Indicador de carregamento
          ) : (
            <Texto>Login</Texto> // Texto do botão
          )}
        </Button>
      </Center>
    </ScrollView>
  );
};

export default Login;
