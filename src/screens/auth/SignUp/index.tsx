import React from "react";// 
import { useNavigation } from "@react-navigation/native";// 
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { Image } from "react-native";// import the image component
import { Center, ScrollView } from "native-base";// import Component from
import { Texto, Goback, Title, TextInfo, Animation } from "./styles";// import styles from "./styles
import Button from "../../../components/Button";// import ButtonComponent from "../../../components/Button
import Input from "../../../components/Input";// import Input from "../../../components/Input
import { initializeApp }  from "firebase/app"; // Initialize the app with the firebase configuration
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth"; // Get the auth token from the firebase configuration object and pass it to the login method when the user is logged in with the Firebase credentials passed 
import firebaseconfig from "../../../settings/Firebase/firebaseconfig";// Firebase configuration object passed to login method when the user is logged in with the Firebase credentials passed credentials 

const app = initializeApp(firebaseconfig);
const auth = getAuth(app);

const SignUp = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    // Implement user registration logic here
  };

  return (
    <ScrollView flex={1}>
      <Center>
        <Goback onPress={handleGoBack} activeOpacity={0.9}>
          <Image source={require("../../../assets/icon/seta.png")} />
        </Goback>
        <Animation>
          <LottieView
            autoPlay
            resizeMode="contain"
            speed={0.5}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../../assets/animation/Hello.json")}
          />
        </Animation>
        <Title>Create your account</Title>
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Input label="Email" />
        <Input label="Senha" />
        <Input label="Confirme a Senha" />
        <TextInfo>
          Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade
        </TextInfo>
        <Button onPress={handleRegister} mb={12} marginBottom={24}>
          <Texto>CADASTRAR</Texto>
        </Button>
      </Center>
    </ScrollView>
  );
};

export default SignUp;
