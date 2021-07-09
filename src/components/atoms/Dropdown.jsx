import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Arrow_Bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';
import Arrow_Top from '../../assets/img/ic_arrow_top_black_24.svg';

const Styled = {
  Container: styled.div`
    position: relative;
  `,

  Button: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${props => props.small ? "0.8rem 2rem" : "2.4rem 2.6rem"};
    border-radius: ${props => props.rounded ? '5.4rem' : '1rem'};
    border: none;
    background-color: ${({ theme }) => theme.color.white};

    .destination {
      display: flex;
      flex-direction: column;
      text-align: left;

      .name {
        display: ${props => props.caption ? 'block' : 'none'};
        font: ${({ theme }) => theme.font.caption};
        color: ${({ theme }) => theme.color.gray3};
      }

      .text {
        margin-top: ${props => props.caption ? '0.6rem' : '0'};
        font: ${({ theme, fontStyle }) => fontStyle ? theme.font[fontStyle] : theme.font.body2};
        color: ${props => props.list ? "#3D3D3D" : "#C1C1C1"};
      }
    }
  `,

  Nav: styled.nav`
    width: 100%;
    position: absolute;
    display: ${props => props.isActive ? 'flex' : 'none'};
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0,0,0,0.1);
    border-radius: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Ul: styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  List: styled.li`
    height: 3.4rem;
    padding-left: 1.4rem;
    font: ${({ theme }) => theme.font.body1};
    color: ${({ theme, selected }) => selected
      ? theme.color.primary
      : theme.color.darkgray1
    };
    display: flex;
    align-items: center;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.bg_yellow};
    }
  `,
};

const Dropdown = ({ children, placeholder, rounded, font, caption, small }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [list, setList] = useState('');
  
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Container>
      <Styled.Button
        onClick={onClick}
        list={list}
        rounded={rounded}
        fontStyle={font}
        caption={caption}
        small={small}
      >
        <div className="destination">
          <span className="name">{caption}</span>
          <span className="text">
            {list ? list : placeholder}
          </span>
        </div>
        <img
          src={isActive ? Arrow_Top : Arrow_Bottom}
          alt=""
        />
      </Styled.Button>
      <Styled.Nav ref={dropdownRef} isActive={isActive}>
        <Styled.Ul>
          {children.map((value, index) => (
              <Styled.List
                key={index}
                selected={
                  list === value ? true : false
                }
                onClick={() => {
                  setList(value);
                  setIsActive(!isActive);
                }}
              >
                {value}
              </Styled.List>
            ))}
        </Styled.Ul>
      </Styled.Nav>
    </Styled.Container>
  );
};

export default Dropdown;