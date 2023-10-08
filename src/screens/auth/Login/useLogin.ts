import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-community/async-storage";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "./shemas";
import { FormDataProps, StackRoutes } from "./types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import firebaseConfig from "../../../settings/Firebase/firebaseconfig"; // Import a custom Firebase configuration
import { initializeApp } from "firebase/app"; // Initialize the app with the Firebase configuration
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth"; // Get the auth token from the Firebase configuration object and pass it to the login method when the user is logged in with the Firebase credentials passed

const app = initializeApp(firebaseConfig); // Initialize the app with the Firebase configuration
const auth = getAuth(app); // Get the authentication configuration

const useLogin = () => {
  const navigation: NavigationProp<StackRoutes> = useNavigation(); // Initialize the navigation hook

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // Check if there are stored user data and fill the fields
    if (toggle === true) {
      checkAndFillStoredUser();
    }
    console.log(toggle);
  }, []);

  function showPassword() {
    setShow(!show);
  }

  const { setValue } = useForm<FormDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const checkAndFillStoredUser = async () => {
    try {
      // Check if the user has already been logged in and fill the fields with the stored user data
      const storedUserData = await AsyncStorage.getItem("storedUserData");
      if (storedUserData) {
        // If there are stored data, parse and fill the fields
        const userData = JSON.parse(storedUserData);
        setValue("email", userData.email);
        //setValue("password", userData.password);
      }
    } catch (error) {
      console.error("Error fetching stored user data:", error);
    }
  };

  const handleLogin = async (data: FormDataProps) => {
    try {
      setLoading(true);
      // Store user data in AsyncStorage
      await AsyncStorage.setItem(
        "storedUserData",
        JSON.stringify({
          email: data.email,
          password: data.password,
        })
      );
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // After successful login, get the authentication token
      const idToken = await user.getIdToken(/* forceRefresh */ false);

      // Store the token in AsyncStorage
      await AsyncStorage.setItem("authToken", idToken);

      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Implement the logic to recover the password here
  };

  const handleGoBack = () => {
    navigation.navigate("Welcome"); // Go back to the previous screen when the button is pressed
  };

  const handleRememberMe = () => {};

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle === true) {
      console.log("Lembrar de mim");
      // Inserir aqui uma logica para lembrar do usuaruio
    } else {
      console.log("não Lembrar de mim");
    }
  };
  
  return {
    handleForgotPassword,
    handleGoBack,
    handleRememberMe,
    handleLogin,
    checkAndFillStoredUser,
    showPassword,
    handleToggle,
  };
};
export default useLogin;
