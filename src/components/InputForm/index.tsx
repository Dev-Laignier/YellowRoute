import React, { useState, useEffect } from "react";
import { Input as NativeBaseInput, IInputProps, FormControl, theme } from "native-base";
import { Animated } from "react-native";

type Props = IInputProps & {
  errorMessage?: string | null;
  label?: string;
}

const InputForm = ({ label, errorMessage = null, isInvalid, value, ...rest }: Props) => {

  const invalid = !!errorMessage || isInvalid;
  const [isFocused, setIsFocused] = useState(false);
  const fontSize = new Animated.Value(16);
  const top = new Animated.Value(25);
  const color = isFocused ? "#0891b2" : "#ffffff00";
  const marginTop = isFocused ? 14 : 0; // Inicialmente, definimos a margem como 20
  const [ isValid, setIsValid ] = useState(false);
  const borderColor = isValid ? "#4ade80" : (isFocused ? "#0891b2" : "lightgray");

  const valid = () => {
    if ( value && !errorMessage ) {
      setIsValid(true);
  }else{
    setIsValid(false);
  };
};

  useEffect(() => {
    valid();
  },[value,errorMessage]);

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
        // borderColor: borderColor,
        paddingTop: 10,
        marginTop, // Usando a margem superior dinâmica
      }}
    >
      <Animated.Text
        style={{
          position: "absolute",
          left: 0,
          top,
          fontSize: 12,
          color,
          textTransform: "uppercase",
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
        variant={"underlined"}
        borderColor={borderColor}
        w={"85%"}
        h={55}
        justifyContent={"center"}
        placeholderTextColor="#0891b240"
        fontSize={20}
        color="info.600"
        {...rest}
        _focus={{
          borderColor: borderColor,
          borderWidth: 2,
          placeholderTextColor:"#ffffff00",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
        _invalid={{
          borderColor: "#f95e16",
          borderWidth: 2,
          bgColor: "#f9731630",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          placeholderTextColor: "#f97316"
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

export default InputForm;
