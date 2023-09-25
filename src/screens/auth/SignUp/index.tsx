import React, { useState } from "react"; //
import { useNavigation, NavigationProp } from "@react-navigation/native"; //
import { Entypo, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import LottieView from "lottie-react-native"; // Import the Lottie animation component
import { ActivityIndicator, Image } from "react-native"; // import the image component
import { Center, Icon, IconButton, ScrollView } from "native-base"; // import Component from
import { Texto, Goback, Title, TextInfo, Animation } from "./styles"; // import styles from "./styles
import Button from "../../../components/Button"; // import ButtonComponent from "../../../components/Button
import Input from "../../../components/Input"; // import Input from "../../../components/Input
import { initializeApp } from "firebase/app"; // Initialize the app with the firebase configuration
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseconfig from "../../../settings/Firebase/firebaseconfig"; // Firebase configuration object passed to login method when the user is logged in with the Firebase credentials passed credentials
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type StackRoutes = {
  Home: undefined;
  Welcome: undefined;
}

const app = initializeApp(firebaseconfig);
const auth = getAuth(app);
// Define type of authentication method to use when authenticating
type FormDataProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe seu nome"),
  lastName: yup.string().required("Informe seu sobrenome"),
  email: yup.string().required("Informe seu e-mail").email("E-mail invalido"),
  password: yup.string().required("Informe sua senha").min(6,"A senha deve ter no minimo 6 caracteres"),
  passwordConfirm: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senha precisam ser iguais"),
});

const SignUp = () => {
  const navigation: NavigationProp<StackRoutes> = useNavigation();

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleGoBack = () => {
    navigation.navigate("Welcome");
  };

  const handleRegister = (data: FormDataProps) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigation.navigate("Home"); // Navigate to "Home" screen on successful login
      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        alert(error); // Display error message if login fails
      });
      setLoading(false);
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
        <Title>Crie sua conta</Title>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Nome"
              onChangeText={onChange}
              value={getValues("name")}
              errorMessage={errors.name?.message}
              InputLeftElement={
                <IconButton
                  disabled
                  mr={-4}
                  icon={<Icon as={<Entypo name="user"/>} size={8}/>}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Sobrenome"
              onChangeText={onChange}
              value={getValues("lastName")}
              errorMessage={errors.lastName?.message}
              InputLeftElement={
                <IconButton
                  disabled
                  mr={-4}
                  icon={<Icon as={<Entypo name="user"/>} size={8}/>}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="E-mail"
              onChangeText={onChange}
              value={getValues("email")}
              errorMessage={errors.email?.message}
              InputLeftElement={
                <IconButton
                  disabled
                  mr={-4}
                  icon={<Icon as={<MaterialCommunityIcons name="email-edit-outline"/>} size={8}/>}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Senha"
              onChangeText={onChange}
              value={getValues("password")}
              errorMessage={errors.password?.message}
              InputLeftElement={
                <IconButton
                  disabled
                  mr={-4}
                  icon={<Icon as={<Fontisto name="locked"/>} size={8}/>}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field: { onChange, onBlur } }) => (
            <Input
              label="Confirme sua senha"
              onChangeText={onChange}
              value={getValues("passwordConfirm")}
              errorMessage={errors.passwordConfirm?.message}
              InputLeftElement={
                <IconButton
                  disabled
                  mr={-4}
                  icon={<Icon as={<Fontisto name="locked"/>} size={8}/>}
                />
              }
            />
          )}
        />
        <TextInfo>
          Ao criar uma conta, você concorda com nossos Termos de Serviço e
          Política de Privacidade
        </TextInfo>
        <Button onPress={handleSubmit(handleRegister)} mb={24}>
          {loading ? (
            <ActivityIndicator color="#0891b2" size={32} /> // Indicador de carregamento
          ) : (
            <Texto>CADASTRAR</Texto> // Texto do botão
          )}
        </Button>
      </Center>
    </ScrollView>
  );
};

export default SignUp;
