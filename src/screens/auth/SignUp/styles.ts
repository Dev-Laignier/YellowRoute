import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Goback = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  margin-left: 32px;
  margin-top: 32px;
  align-self: flex-start;
`;

export const Animation = styled.View`
  width: 90%;
  height: 280px;
  margin-top: 4px;
  margin-bottom: 24px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  margin-bottom: 18px;
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`;
export const Texto = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.YELLOW};;
  letter-spacing: 2px;
  font-weight: 800;
`;
export const TextInfo = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  width: 85%;
  margin: 12px;
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`;