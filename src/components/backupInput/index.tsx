import React from 'react';
import { Input as InputNative, IInputProps } from 'native-base';

interface CustomInputProps extends IInputProps {
  // Adicione quaisquer props personalizadas que você queira passar para o InputNative
}

const Input: React.FC<CustomInputProps> = ({ ...rest }) => {
  return (
    <InputNative
      mb={4}
      w={320}
      h={50}
      justifyContent={"center"}
      placeholderTextColor="#0891b240"
      p={2}
      fontSize={20}
      color="info.600"
      {...rest}
      _focus={{
        borderColor: "lightBlue.400",
        borderWidth: 2,
        backgroundColor: "#f6c10140",
      }}
      _invalid={{
        borderColor: "orange.500",
        borderWidth: 2,
      }}
    />
  );
};

export default Input;
