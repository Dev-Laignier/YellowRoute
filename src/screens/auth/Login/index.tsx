import React from "react";
import { ScrollView } from "native-base"; // Import ScrollView from NativeBase
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook from React Navigation
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { Image } from "react-native"; // Import the React Native image component
import { TouchableOpacity } from "react-native-gesture-handler"; // Import TouchableOpacity to create a clickable button
import { Container, Texto, Goback, Title, Animation, TextRecovery } from "./styles"; // Import custom styles
import Button from "../../../components/Button"; // Import a custom button component
import Input from "../../../components/Input"; // Import a custom input component

const Login = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleForgotPassword = () => {
    // Implement the logic to recover the password here
  };

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen when the button is pressed
  };

  return (
    <Container>
      <Goback onPress={handleGoBack} activeOpacity={0.9}>
        <Image source={require("../../../assets/icon/seta.png")} />
      </Goback>
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
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
          Log in with your email and password
        </Title>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6}>
          <TextRecovery>Forgot your password? We can help!</TextRecovery>
        </TouchableOpacity>
        <Button onPress={() => {}} mb={12}>
          <Texto>Log In</Texto>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Login;
