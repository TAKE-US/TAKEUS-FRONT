import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const HeaderWrap = styled.div`
  font: ${({ theme }) => theme.font.display1};
  color: ${({ theme }) => theme.color.primary};
`;

const Header = () => {
  const location = useLocation();
  return (
    <>{location.pathname !== "/login" && <HeaderWrap>Header</HeaderWrap>}</>
  );
};

export default Header;
