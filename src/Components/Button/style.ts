import styled from "styled-components/native";              // style.js (arquivo de estilização)
// Estilização do container do botão
export const ButtonContainer = styled.TouchableOpacity`     
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60px;
  padding: 8px 8px;
  border-radius: 8px;
  background-color: rgba(32,17,64,0.85);
  margin: 8px;
`;
// Estilização do texto do botão
export const ButtonText = styled.Text`                    
  color: #F7CC01;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 3px;
`;