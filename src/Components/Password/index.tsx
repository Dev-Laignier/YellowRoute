import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, IconContainer, Input } from './style';
import { TouchableOpacity } from 'react-native';

interface InputProps {
  placeholder: string;
  placeholderTextColor: string;
  secureTextEntry: boolean;
  onChangeText: (text: string) => void;
  iconName: string;
  custonStyle?: object;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'url' | 'decimal-pad' | 'number-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'name-phone-pad' | 'twitter' | 'web-search';
}

const PasswordInput: React.FC<InputProps> = ({ placeholder, placeholderTextColor, secureTextEntry = true, onChangeText, iconName, custonStyle, keyboardType, ...rest }) => {

  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    onChangeText(inputText);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} size={24} color={'#DD440040'} />
      </IconContainer>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={!showPassword && secureTextEntry}
        onChangeText={handleTextChange}
        value={text}
        style={custonStyle}
        keyboardType={keyboardType || "default"}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword}>
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={24} color={'#201140'}/>
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default PasswordInput;
