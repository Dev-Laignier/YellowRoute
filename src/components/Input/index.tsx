import React, { useState, useEffect } from "react";
import { Input as NativeBaseInput, IInputProps, FormControl, theme } from "native-base";
import { Animated } from "react-native";

type Props = IInputProps & {
  errorMessage?: string | null;
  label?: string;
}

const Input = ({ label, errorMessage = null, isInvalid, ...rest }: Props) => {

  const invalid = !!errorMessage || isInvalid;
  const [isFocused, setIsFocused] = useState(false);
  const fontSize = new Animated.Value(16);
  const top = new Animated.Value(25);
  const color = isFocused ? "#0891b2" : "#ffffff00";
  const marginTop = isFocused ? 14 : 0; // Inicialmente, definimos a margem como 20

  useEffect(() => {

    Animated.timing(fontSize, {
      toValue: isFocused ? 20 : 20,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(top, {
      toValue: isFocused ? -18 : 22,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  return (
    
    <Animated.View
      style={{
        borderColor: "lightgray",
        paddingTop: 10,
        marginTop, // Usando a margem superior dinâmica
      }}
    >
      <Animated.Text
        style={{
          position: "absolute",
          left: 13,
          top,
          fontSize,
          color,
        }}
      >
        {label}
      </Animated.Text>
      <FormControl isInvalid={invalid} mb={2}>
      <NativeBaseInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={label}
        isInvalid={invalid}
        w={320}
        h={55}
        justifyContent={"center"}
        placeholderTextColor="#0891b240"
        fontSize={20}
        color="info.600"
        {...rest}
        _focus={{
          borderColor: "lightBlue.400",
          borderWidth: 2,
          backgroundColor: "#f6c10140",
          placeholderTextColor:"#ffffff00"
        }}
        _invalid={{
          borderColor: "orange.500",
          borderWidth: 2,
          bgColor: "#f9731630"
        }}
        {...rest}
      />
    <FormControl.ErrorMessage fontSize={24}>
    {errorMessage}
    </FormControl.ErrorMessage>
    </FormControl>
    </Animated.View>
  );
};

export default Input;
