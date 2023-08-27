import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: colors.BACKGROUND;
`
export const IconBac = styled.View`
  /* position: absolute; */
  width: 42px;
  height: 42px;
  right: 155px; 
  top: 32px;
  /* margin: 55px 25px */
`

export const ImageLogin = styled.View`
  width: 266px;
  height: 266px;
  margin: 0px 8px;
  align-items: center;
`
export const RecoverContainer = styled.View`
  width: 90%;
  height: 32px;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 0px;
  margin: 8px;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`
export const RecoverContainerOne = styled.View`
  flex-direction: row;
  align-items: center;
  width: 45%;
  height: 32px;
  gap: 4px
`
export const RecoverContainerTwo = styled.View`
  flex-direction: row;
  width: 45%;
  height: 32px;
  align-items: center;
` 
