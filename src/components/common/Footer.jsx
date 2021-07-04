import React from 'react';
import { useLocation } from "react-router";
import styled from "styled-components";
import Logo from 'assets/img/ic_logo_wordmark_smallest.svg';
import CopyRight from 'assets/img/ic_logo_copyright.svg';

const Styled = {
  Wrapper: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.bg_gray};
    padding: 80px 0;
    
    font-size: 1.2rem;
    font-family: 'Spoqa Han Sans Neo';

    .footer-logo {
      margin-right: 16px;
    }
  `,
};

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {
        location.pathname !== "/login" &&
        <Styled.Wrapper>
          <img className="footer-logo" src={Logo} alt="logo small" />
          <div>Copyright &copy;</div>
          <img src={CopyRight} alt="logo small dark" />
          <div>corp.All Rights Reserved.</div>
        </Styled.Wrapper>
      }
    </>
  );
};

export default Footer;
