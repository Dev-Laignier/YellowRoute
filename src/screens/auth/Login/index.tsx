import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native"; // Import the navigation hook from React Navigation
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { Image } from "react-native"; // Import the React Native image component
import { Center, ScrollView } from "native-base"; // Import the React Native
import { TouchableOpacity } from "react-native-gesture-handler"; // Import TouchableOpacity to create a clickable button
import { Texto, Goback, Title, Animation, TextRecovery } from "./styles"; // Import custom styles
import Button from "../../../components/Button"; // Import a custom button component
import Input from "../../../components/Input"; // Import a custom input component

// Define a type for the available stack routes
type StackRoutes = {
  Login: undefined; // "Login" screen with no additional parameters
  SignUp: undefined; // "SignUp" screen with no additional parameters
  Welcome: undefined; // "Welcome" screen with no additional parameters
  // You can include other screens and their parameters here as needed
};

const Login = () => {
  const navigation: NavigationProp<StackRoutes> = useNavigation(); // Initialize the navigation hook

  const handleForgotPassword = () => {
    // Implement the logic to recover the password here
  };

  const handleGoBack = () => {
    navigation.navigate("Welcome"); // Go back to the previous screen when the button is pressed
  };

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
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../../assets/animation/Earth_Green_Blue.json")}
          />
        </Animation>
        <Title style={{ alignSelf: "center" }}>
          Faça Login com seu e-mail e senha
        </Title>
        <Input label="Email" />
        <Input label="Password" secureTextEntry />
        <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6}>
          <TextRecovery>
            Esquceu sua senha? podemos te ajudar!!
          </TextRecovery>
        </TouchableOpacity>
        <Button onPress={() => {}} mb={12}>
          <Texto>Login</Texto>
        </Button>
      </Center>
    </ScrollView>
  );
};

export default Login;
