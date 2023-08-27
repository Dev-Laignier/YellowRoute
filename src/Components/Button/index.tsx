// Importações necessárias do React e do React Native
import React from "react";
import { ButtonContainer, ButtonText } from "./style";
import { ActivityIndicator } from "react-native";

interface ButtonProps {             // Interface que define as propriedades do botão
  title: string;                    // Título do botão
  onPress: () => void;              // Função a ser executada quando o botão for pressionado
  disabled?: boolean;               // Indica se o botão está desabilitado
  activeOpacity?: number;           // Opacidade do botão quando pressionado
  customStyle?: object;             // Estilo personalizado para o botão (opcional)
  isLoading?: boolean;              // Indica se o botão está em estado de carregamento
}

// Componente Button
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  activeOpacity = 0.8,
  customStyle,
  isLoading = false,
  ...rest
}) => {
  return (
    <ButtonContainer
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={customStyle}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#000" />        // Renderiza um indicador de carregamento se isLoading for verdadeiro
      ) : (
        <ButtonText>{title}</ButtonText>            // Renderiza o texto do botão
      )}
    </ButtonContainer>
  );
};
// Exporta o componente Button como padrão
export default Button;