/* eslint-disable arrow-parens */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Arrow_Bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';

const Styled = {
  Container: styled.div`
    position: relative;
    width: 14.5rem;
  `,

  Button: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props) => (props.small ? '0' : '2.4rem 2.6rem')};

    .destination {
      display: flex;
      flex-direction: column;
      text-align: left;

      .item {
        display: flex;
        align-items: center;
      }

      .name {
        display: ${(props) => (props.caption ? 'block' : 'none')};
        font: ${({ theme }) => theme.font.caption};
        color: ${({ theme }) => theme.color.gray3};
      }

      .text {
        margin-top: ${(props) => (props.caption ? '0.6rem' : '0')};
        margin-left: ${(props) => props.image && '0.4rem'};
        font: ${({ theme, fontStyle }) => (fontStyle ? theme.font[fontStyle] : theme.font.body2)};
        color: ${(props) => (props.list ? '#3D3D3D' : '#C1C1C1')};
      }
    }

    .arrowimg {
      transform: ${(props) => props.isActive && 'rotate(180deg)'};
    }
  `,

  Nav: styled.nav`
    width: 100%;
    position: absolute;
    display: ${(props) => (props.isActive ? 'flex' : 'none')};
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
    z-index: 2;
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
    color: ${({ theme, selected }) => (selected ? theme.color.primary : theme.color.darkgray1)};
    display: flex;
    align-items: center;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.bg_yellow};
    }
  `,

  Img: styled.div``,
};

const Dropdown = ({ item, placeholder, rounded, font, caption, small, dropArray, onDrop, id, initial }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [list, setList] = useState('');
  const [image, setImage] = useState('');
  const onClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    setList(initial.type);
    setImage(item.filter((category) => category.type === initial.type)[0]?.img);
  }, [item, initial]);

  return (
    <Styled.Container>
      <Styled.Button
        onClick={onClick}
        list={list}
        image={image}
        rounded={rounded}
        fontStyle={font}
        caption={caption}
        small={small}
        isActive={isActive}
      >
        <div className="destination">
          <span className="name">{caption}</span>
          <div className="item">
            {image && image}
            <span className="text">{list ? list : placeholder}</span>
          </div>
        </div>
        <img className="arrowimg" src={Arrow_Bottom} alt="arrow" />
      </Styled.Button>
      <Styled.Nav ref={dropdownRef} isActive={isActive}>
        <Styled.Ul>
          {item.map((value, index) => (
            <Styled.List
              key={`${value.type}-${index}`}
              selected={list === value['type'] ? true : false}
              onClick={() => {
                setList(value['type']);
                setImage(value['img']);
                onDrop(dropArray, value['type'], id);
                setIsActive(!isActive);
              }}
            >
              {value['type']}
            </Styled.List>
          ))}
        </Styled.Ul>
      </Styled.Nav>
    </Styled.Container>
  );
};

export default Dropdown;
