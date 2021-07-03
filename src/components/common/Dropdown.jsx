import React, { useRef } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import arrow_bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';

const MenuContainer = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  width: 21rem;
  height: 8.2rem;
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
  width: 19.8rem;
  padding: 1rem 0.6rem;
  box-shadow: 0rem 0rem 3rem 0.1rem rgba(0,0,0,0.1);
  border-radius: 1rem;
`;

const MenuUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuList = styled.li`
  width: 19.8rem;
  height: 3.4rem;
  font: ${({ theme }) => theme.font.subheading};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.bg_yellow};
  }
`;

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  const country = ["미국", "캐나다", "독일"];

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