// Import the necessary modules and components
import React from "react";
import { ImageBackground } from "react-native";
import { Center, Box, VStack } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TextBottom, TextTop, Texto } from "./styles";
import Button from "../../components/Button";

// Define a type for the available stack routes
type StackRoutes = {
  Login: undefined; // "Login" screen with no additional parameters
  SignUp: undefined; // "SignUp" screen with no additional parameters
  // You can include other screens and their parameters here as needed
};

// Define the Welcome component
const Welcome = () => {
  // Use the useNavigation hook to access the navigation instance // The navigation instance is typed based on the StackRoutes type
  const navigation: NavigationProp<StackRoutes> = useNavigation();

  // Function to handle navigation to the "Login" screen
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  // Function to handle navigation to the "SignUp" screen
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  // Render the Welcome screen components
  return (
    <VStack flex={1} safeArea>
      <ImageBackground
        source={require("../../assets/image/RouteApp.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Center flex={1}>
          <TextTop>Crie e gerencie suas rotas</TextTop>
          {/* Render a custom button for "Login" */}
          <Button onPress={handleLogin}>
            <Texto>Login</Texto>
          </Button>
          {/* Render a custom button for "Sign Up" */}{" "}
          <Button onPress={handleSignUp}>
            <Texto>SignUp</Texto>
          </Button>
          {/* Create a decorative line */}
          <Box
            width="85%"
            borderBottomWidth={2}
            borderColor="#201140"
            margin={4}
          />
          <TextBottom>
            Yellow route é o melhor assistente pessoal para gerenciar suas rotas
          </TextBottom>
        </Center>
      </ImageBackground>
    </VStack>
  );
};
// Export the Welcome component
export default Welcome;
