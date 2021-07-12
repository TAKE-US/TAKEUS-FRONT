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
    
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.white};
    border: solid 1px ${({ theme }) => theme.color.primary};
    &:hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary};
    }

    &.primary {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary};
      &:hover {
        background-color: ${({ theme }) => theme.color.primary_light};
      }
    }

    &.black {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.darkgray2};
      border-color: ${({ theme }) => theme.color.darkgray2};
      &:hover {
        background-color: ${({ theme }) => theme.color.darkgray1};
      border-color: ${({ theme }) => theme.color.darkgray1};
      }
    }
  `
};

const Button = ({ children, primary, black, padding, rounded, full, font }) => {
  return (
    <Styled.Button
      className={`${primary && 'primary'} ${black && 'black'}`}
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
