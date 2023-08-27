// Import necessary libraries and components
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, ScrollView, Image, TouchableOpacity, Text, Alert, View } from "react-native";
import { Container, IconBack, InputText, PasswordInputContainer, PasswordTextInput, ToggleButton } from "./style";
import TextTwo from "../../../Components/TextTwo";
import TextThree from "../../../Components/TextThree";
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../../../Components/Button";

// Import Firebase authentication functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/firebase-config";

// Define the SignUp component
const SignUp: React.FC = () => {

  const navigation = useNavigation()

  // State variables to store user input
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ confirmEmail, setConfirmEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const [showAlerts, setShowAlerts] = useState(false); // State to control alerts

  // Initialize Firebase app and authentication
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 
  const buttonStyle = {
    marginTop: 48,
    marginBottom: 48,
  }

  // Function to handle user registration
  function handleNewUser (){

    // Set showAlerts to true to display alerts
    setShowAlerts(true);
      
    if (!name || !lastName || !phoneNumber || !email || !confirmEmail || !password || !confirmPassword){
      Alert.alert("Error", "Preencha todos os campos");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)

    .then(()=> {
      Alert.alert("Conta criada com sucesso") // Display message if user registration
      navigation.navigate("Main"); // Navigate to "Main" screen on successful login
    })
    .catch((error) => {
      // Handle registration error
      console.log(error)
      alert(error) // Display error message if login fails
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
     
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Container>
            <IconBack>
              <TouchableOpacity 
              onPress={()=> navigation.navigate( "Welcome" )}><Image source={require('../../../assets/icon/seta.png')}/>
              </TouchableOpacity>
            </IconBack>
            <TextTwo>Dados pessoais</TextTwo>
            {/* User's first name input */}
            <TextThree> Nome </TextThree>
            <InputText  
            placeholder="Digite seu Nome" 
            onChangeText={setName} 
            autoCapitalize="characters" 
            style={{ borderColor: showAlerts && name === "" ? "#D40" : "#F6C101" }} 
            />
            { showAlerts && name === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* User's last name input */}
            <TextThree>  Sobrenome </TextThree>
            <InputText  
            placeholder="Digite seu sobrenome" 
            onChangeText={setLastName} 
            autoCapitalize="characters" 
            style={{ borderColor: showAlerts && lastName === "" ? "#D40" : "#F6C101" }} 
            />
            { showAlerts && lastName === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* User's contact information */}
            <TextTwo>  Contato </TextTwo>
            {/* User's phone number input */}
            <TextThree>  Celular </TextThree>
            <InputText  
            placeholder="Digite o DDD + Telefone" 
            onChangeText={setPhoneNumber} 
            keyboardType="phone-pad" 
            style={{ borderColor: showAlerts && phoneNumber === "" ? "#D40" : "#F6C101" }} 
            />
            { showAlerts && phoneNumber === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* User's email input */}
            <TextThree>E-mail</TextThree>
            <InputText 
            placeholder="Digite seu e-mail" 
            onChangeText={setEmail} 
            keyboardType="email-address" 
            style={{ borderColor: showAlerts && email === "" ? "#D40" : "#F6C101" }}
            />
            { showAlerts && email === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* Confirm user's email */}
            <TextThree>Confirmação de e-mail</TextThree>
            <InputText 
            placeholder="Confirme seu e-mail" 
            onChangeText={setConfirmEmail} 
            keyboardType="email-address" 
            style={{ borderColor: showAlerts && confirmEmail === "" ? "#D40" : "#F6C101" }}
            />
            { showAlerts && confirmEmail === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            <TextTwo>Crie sua Senha</TextTwo>
            <Text 
            style={{ color:"#20114050", fontSize: 12, width: "92%" }}>
              Sua senha precisa ter no mínimo 8 caracteres, sendo uma letra maiúscula, uma minúscula, um caractere especial e um número.
            </Text>
            {/* User's password input */}
            <TextThree>
              Senha
            </TextThree>
            <InputText 
              placeholder="Digite sua senha"
              onChangeText={setPassword}
              secureTextEntry={!showPassword} 
              style={{ borderColor: showAlerts && password === "" ? "#D40" : "#F6C101" }}
            />
              { showAlerts && password === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* Confirm user's password */}
            <TextThree>Confirmação de senha</TextThree>
            <InputText 
              placeholder="Confirme sua senha" 
              onChangeText={setConfirmPassword} 
              secureTextEntry={!showPassword} 
              style={{ borderColor: showAlerts && confirmPassword === "" ? "#D40" : "#F6C101" }}
            />
            { showAlerts && confirmPassword === "" && <Text style={{ color: "#D40" }}>Campo obrigatorio</Text>}
            {/* Button to register user */}
            <TouchableOpacity onPress={toggleShowPassword} style={{ marginTop: 8, marginBottom: -20 }}>
              <TextThree>{ showPassword ? "Ocultar Senha": "Mostrar Senha" }</TextThree>
            </TouchableOpacity>
            <Button title="Cadastrar" onPress={handleNewUser} customStyle={buttonStyle}/>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;