// CustomButton.tsx
import React from "react";
import { Button as ButtonNative, IButtonProps } from "native-base";

interface CustomButtonProps extends IButtonProps {
  // Adicione quaisquer props personalizadas que você queira passar para o ButtonNative
}

const CustomButton: React.FC<CustomButtonProps> = ({ ...rest }) => {
  return (
    <ButtonNative
      w={320}
      h={60}
      bg={"rgba(32,17,64,0.90)"}
      borderRadius={12}
      _pressed={{
        bgColor: "info.900",
      }}
      {...rest}
    />
  );
};

export default CustomButton;
