import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import QueryString from 'qs';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import { LoginDispatchContext } from 'lib/context/context';

const Styled = {
  Wrap: styled.div`
    position: relative;
  `,

  Btn: styled.div`
    font: ${({ theme }) => theme.font.gnb};
    color: ${({ isActive, theme }) => (isActive ? theme.color.primary : theme.color.darkgray1)};
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
  `,

  Status: styled.div`
    position: absolute;
    right: -0.9rem;
    top: 3rem;
    display: ${(props) => (props.isActive ? 'flex' : 'none')};
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.white};
    padding: 1.9rem 1.7rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.15);

    :after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 0.2rem 1.5rem 1.5rem;
      border-color: ${({ theme }) => theme.color.white} transparent;
      display: block;
      width: 0;
      z-index: 1;
      top: -1rem;
      left: 25.5rem;
    }

    .avatar {
      display: flex;
      background-color: ${({ theme }) => theme.color.lightgray1};
      margin-right: 0.5rem;
      font: ${({ theme }) => theme.font.body2};
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 1.9rem;
      color: #686868;
      justify-content: center;
      align-items: center;
    }

    .email {
      font: ${({ theme }) => theme.font.body3};
      margin-right: 2rem;
    }

    .profile {
      display: flex;
      padding-bottom: 1.4rem;
      align-items: center;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${({ theme }) => theme.color.lightgray2};

      .logout {
        font: ${({ theme }) => theme.font.body3};
        white-space: nowrap;
        border: 0.05rem solid ${({ theme }) => theme.color.gray1};
        border-radius: 0.5rem;
        padding: 0.5rem 0.7rem;
      }
    }

    .nav {
      display: flex;
      padding-top: 1.5rem;
    }
  `,

  Page: styled.div`
    font: ${({ theme }) => theme.font.body3};
    background-color: ${({ theme, isSelect }) => (isSelect ? theme.color.primary_light : theme.color.lightgray1)};
    padding: 1rem 2.2rem;
    border-radius: 0.5rem;
    white-space: nowrap;

    :hover {
      cursor: pointer;
    }

    :first-child {
      margin-right: 0.5rem;
    }
  `,
};

const LogOut = ({ history, location }) => {
  const statusRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(statusRef, false);
  const setIsLogin = useContext(LoginDispatchContext);

  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const email = localStorage.getItem('email');

  const onClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const logoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('ID');
    localStorage.removeItem('email');
    localStorage.removeItem('issuedAt');
    setIsLogin(false);
    history.push('/');
  };

  const pageClick = () => {
    history.push('/mypage?select=post');
    setIsActive(!isActive);
  };

  const reviewClick = () => {
    history.push('/mypage?select=review');
    setIsActive(!isActive);
  };

  return (
    <Styled.Wrap>
      <Styled.Btn onClick={onClick} isActive={isActive}>
        마이페이지
      </Styled.Btn>
      <Styled.Status ref={statusRef} isActive={isActive}>
        <div className="profile">
          <div className="avatar">{email?.charAt(0)}</div>
          <div className="email">{email}</div>
          <button className="logout" onClick={logoutClick}>
            로그아웃
          </button>
        </div>
        <div className="nav">
          <Styled.Page onClick={pageClick} isSelect={query?.select === 'post'}>
            이동봉사 모집글
          </Styled.Page>
          <Styled.Page onClick={reviewClick} isSelect={query?.select === 'review'}>
            이동봉사 후기글
          </Styled.Page>
        </div>
      </Styled.Status>
    </Styled.Wrap>
  );
};

export default withRouter(LogOut);
