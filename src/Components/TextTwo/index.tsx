import React from 'react';
import { StyledText } from './style';

interface TextOneProps {
  children: React.ReactNode;            // Text content
  position?: 'absolute' | 'relative';   // Define the positioning type
  top?: number;                         // Define the top position
  bottom?: number;                      // Define the bottom position
  left?: number;                        // Define the left position
  right?: number;                       // Define the right position
}

const TextTwo: React.FC<TextOneProps> = ({ 
  children,
  position = 'relative',
  top,
  bottom,
  left,
  right,
 }) => {
  return <StyledText style={{
    position,
    top,
    bottom,
    left,
    right,
  }}>{children}</StyledText>;
};

export default TextTwo;
