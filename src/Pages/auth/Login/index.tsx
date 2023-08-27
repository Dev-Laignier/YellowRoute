import React, { useState } from "react";// Import React and useState for component creation and state management
import { Image, TouchableOpacity, Text, ScrollView } from "react-native";// Import necessary components from the React Native library
import { Container, IconBac, ImageLogin, RecoverContainer, RecoverContainerOne, RecoverContainerTwo } from "./style";// Import styled components for styling
// Import custom TextOne and Button components
import TextOne from "../../../Components/TextOne";
import Button from "../../../Components/Button";
import { FontAwesome } from '@expo/vector-icons';// Import FontAwesome icons from Expo's vector icons library
import { useNavigation } from "@react-navigation/native";// Import useNavigation hook for navigation management
// Import Firebase authentication functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/firebase-config";// Import Firebase configuration
// Import custom TextInput and PasswordInput components
import TextInput from "../../../Components/Input";
import PasswordInput from "../../../Components/Password";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  // Function to handle username input change
  const handleUsernameChange = (text: string) => {
    // Logic to handle username input change
  };

  // Function to handle "Remember Me" checkbox toggle
  const handleToggleRememberMe = (value: boolean) => {
    console.log('Remember Me:', value);
    // Do something with the toggle value
  };

  // Function to toggle the "Remember Me" checkbox
  const handleToggle = () => {
    setIsChecked((prevValue) => !prevValue);
    console.log('Remember Me');
  };

  // Function to handle "Forgot Password" text press
  const handleForgotPassword = () => {
    console.log('Forgot Password');
    // Do something when "Forgot Password" text is pressed
  };

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // Initialize Firebase app and authentication
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Function to handle login
  function handlelogin() {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login realizado com sucesso")
        const user = userCredential.user;
        console.log(user)
        navigation.navigate("Main"); // Navigate to "Main" screen on successful login
      })
      .catch((error) => {
        console.log(error)
        alert(error) // Display error message if login fails
      });

  }

  return (
    <ScrollView onScroll={(event) => console.log(event.nativeEvent)}>
      <Container>
        <IconBac>
          {/* Navigate to "Welcome" screen */}
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image source={require('../../../assets/icon/seta.png')} />
          </TouchableOpacity>
        </IconBac>
        <ImageLogin>
          {/* Display a circular image */}
          <Image source={require('../../../assets/image/Ellipse.png')} />
        </ImageLogin>
        <TextOne left={120}>Login</TextOne>
        {/* Username input */}
        <TextInput 
          placeholder="Usuário" 
          placeholderTextColor="#DD440040"
          onChangeText={setEmail} 
          iconName="user" 
          secureTextEntry={false}
        />
        {/* Password input */}
        <PasswordInput 
          placeholder="Senha"
          placeholderTextColor="#DD440040"
          secureTextEntry={true} 
          onChangeText={setPassword} 
          iconName="lock" 
        />
        <RecoverContainer>
          <RecoverContainerOne>
            <TouchableOpacity onPress={handleToggle}>
              {/* Toggle the "Remember Me" checkbox */}
              <FontAwesome name={isChecked ? 'toggle-off' : 'toggle-on'} size={24} color={'#201144'} />
            </TouchableOpacity>
            <Text>Lembrar de mim</Text>
          </RecoverContainerOne>
          <RecoverContainerTwo>
            <TouchableOpacity onPress={handleForgotPassword}>
              {/* Trigger action for forgotten password */}
              <Text>Esqueceu sua Senha</Text>
            </TouchableOpacity>
          </RecoverContainerTwo>
        </RecoverContainer>
        {/* Button to initiate login */}
        <Button title="ENTRAR" onPress={handlelogin} activeOpacity={0.8} />
      </Container>
    </ScrollView>
  );
}

export default Login;