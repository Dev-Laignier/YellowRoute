import React, { useState, useEffect } from "react";
import { Input } from "native-base";
import { Animated } from "react-native";

const InputTeste = ({ label, ...rest }) => {
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
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={label}
        borderColor={"lightgray"}
        mb={2}
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
        }}
        {...rest}
      />
    </Animated.View>
  );
};

export default InputTeste;
