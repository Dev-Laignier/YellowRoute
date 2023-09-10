import React from 'react';
import { Input as InputNative, IInputProps } from 'native-base';

interface CustomInputProps extends IInputProps {
  // Adicione quaisquer props personalizadas que você queira passar para o InputNative
}

const Input: React.FC<CustomInputProps> = ({ ...rest }) => {
  return (
    <InputNative
      placeholder="Senha"
      mb={4}
      w={320}
      h={50}
      justifyContent={"center"}
      placeholderTextColor="info.600"
      p={2}
      fontSize={18}
      color="info.600"
      {...rest}
      _focus={{
        borderColor: "green.400",
        borderWidth: 2,
      }}
      _invalid={{
        borderColor: "red.400",
        borderWidth: 2,
      }}
    />
  );
};

export default Input;
