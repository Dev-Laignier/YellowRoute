import React from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { Image } from "react-native";
import { Center, ScrollView } from "native-base";
import { Texto, Goback, Title, TextInfo, Animation } from "./styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

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
        <Input label="Password" />
        <Input label="Password Confirm" />
        <TextInfo>
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </TextInfo>
        <Button onPress={handleRegister} mb={12}>
          <Texto>CADASTRAR</Texto>
        </Button>
      </Center>
    </ScrollView>
  );
};

export default SignUp;
