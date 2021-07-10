import React from 'react';
import styled from 'styled-components';

const Styled = {
  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.full ? '100%' : 'auto'};
    height: 100%;
    padding: ${props => props.padding || '0.5rem'};
    border-radius: ${props => props.rounded ? '50px' : '8px'};
    font: ${({ theme, fontStyle }) => fontStyle ? theme.font[fontStyle] : theme.font.button};
    
    &.primary {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary};
      &:hover {
        background-color: ${({ theme }) => theme.color.primary_light};
      }
    }

    &.reverse {
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.white};
      border: solid 1px ${({ theme }) => theme.color.primary};
      &:hover {
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primary};
      }
    }
  `
};

const Button = ({ children, primary, padding, rounded, full, font }) => {
  return (
    <Styled.Button
      className={primary ? 'primary' : 'reverse'}
      padding={padding}
      rounded={rounded}
      full={full}
      fontStyle={font}
    >
      {children}
    </Styled.Button>
  );
};


export default Button;
