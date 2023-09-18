import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";// Import NetInfo from React Native
import { useNavigation, NavigationProp } from "@react-navigation/native"; // Import the navigation hook from React Navigation
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { Image, Text } from "react-native"; // Import the React Native image component
import { Center, ScrollView } from "native-base"; // Import the React Native
import { TouchableOpacity } from "react-native-gesture-handler"; // Import TouchableOpacity to create a clickable button
import { Texto, Goback, Title, Animation, TextRecovery } from "./styles"; // Import custom styles
import Button from "../../../components/Button"; // Import a custom button component
import Input from "../../../components/Input"; // Import a custom input component
import firebaseConfig from "../../../settings/Firebase/firebaseconfig"; // Import a custom firebase config
import { initializeApp }  from "firebase/app"; // Initialize the app with the firebase configuration
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth"; // Get the auth token from the firebase configuration object and pass it to the login method when the user is logged in with the Firebase credentials passed 
//import AsyncStorage from "@react-native-async-storage/async-storage"; // Importe AsyncStorage from the firebase configuration object and pass it to the login method when the user is logged in with the Firebase credentials
import AsyncStorage from '@react-native-community/async-storage';
import { useForm, Controller } from "react-hook-form";//
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";//
import * as Keychain from 'react-native-keychain';//


// Define a type for the available stack routes
type StackRoutes = {
  Login: undefined; // "Login" screen with no additional parameters
  SignUp: undefined; // "SignUp" screen with no additional parameters
  Welcome: undefined; // "Welcome" screen with no additional parameters
  Home: undefined; // "Home" screen with no additional parameters
  // You can include other screens and their parameters here as needed
};
//
type FormDataProps = {
  email: string;//
  password: string;//
};
//
const loginSchema = yup.object({
  email: yup.string().required("Informe seu e-email").email("Email invalido"),//
  password: yup.string().required("Informe sua senha").min(6, "A senha deve ter no minimo 6 caracteres")//
})

const app = initializeApp(firebaseConfig);// initialize the app with the firebase configuration
const auth = getAuth(app);// get the authentication configuration

const Login = () => {

  const navigation: NavigationProp<StackRoutes> = useNavigation(); // Initialize the navigation hook

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({//
    resolver: yupResolver(loginSchema),//
  });

  const [loading, setLoading] = useState(false); // Set the loading state to display

  // useEffect(() => {
  //   // Check internet connection before loading the component
  //   NetInfo.fetch().then( async ( state ) => {
  //     if (state.isConnected) {
  //       // If there's a connection, attempt to log in using stored credentials
  //       checkStoredCredentials();
  //     }
  //   });
  // }, []);
  // //
  // const checkStoredCredentials = async ( ) => {
  //   //
  //   try {
  //     const credentials = await Keychain.getGenericPassword();//
  //     //
  //     if (credentials) {
        
  //       const { username, password } = credentials;

  //     }
  //     //
  //   } catch (error) {
  //     console.error("Erro ao buscar credenciais armazenadas:", error);//
  //   }
  //   await Keychain.resetGenericPassword();
  // };
  //
  const handleLogin = async ( data: FormDataProps ) => {
    //
    try {

      setLoading(true);// 

      const userCredential: UserCredential = await signInWithEmailAndPassword( auth, data.email, data.password);// 
      const user = userCredential.user;// 

     // Store the credentials use the react-native-keychain
     //await Keychain.setGenericPassword(data.email, data.password);
     
     setLoading(false);// 
     navigation.navigate("Home");//
      //
    } catch (error) {
      console.error(error);//
    }
  };
  //
  const handleForgotPassword = () => {
    // Implement the logic to recover the password here
  };
  //
  const handleGoBack = () => {
    navigation.navigate("Welcome"); // Go back to the previous screen when the button is pressed
  };
  //
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
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur } }) => (
            <Input 
            label="Email" 
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            />)}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur } }) => (
            <Input 
            label="Password" 
            secureTextEntry 
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            />)}
        />
        <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6}>
          <TextRecovery>
            Esquceu sua senha? podemos te ajudar!!
          </TextRecovery>
        </TouchableOpacity>
        <Button onPress={handleSubmit(handleLogin)} mb={12} >
          <Texto>Login</Texto>
        </Button>
      </Center>
    </ScrollView>
  );
};

export default Login;
