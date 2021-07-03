import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import arrow_bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';

const MenuContainer = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  width: 14rem;
  height: 7.4rem;
  font: ${({ theme }) => theme.font.subheading};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.05);
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const MenuNav = styled.nav`
  position: absolute;
  display: ${props => props.isActive ? 'flex' : 'none'};
`;

const MenuUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuList = styled.li`
  width: 14rem;
  height: 7.4rem;
  font: ${({ theme }) => theme.font.subheading};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  const country = ["미국", "프랑스", "독일", "이탈리아", "스위스"];

  return (
    <MenuContainer>
      <MenuButton onClick={onClick}>
        <span>국가명</span>
        <img src={arrow_bottom} alt="" />
      </MenuButton>
      <MenuNav ref={dropdownRef} isActive={isActive}>
        <MenuUl>
          {country.map((country, index) => (
            <MenuList key={index}>
              {country}
            </MenuList>
          ))}
        </MenuUl>
      </MenuNav>
    </MenuContainer>
  );
};

export default Dropdown;