import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LoginKakao, LoginNaver } from 'components';
import { GoogleLogin } from 'react-google-login';
import LoginImg from 'assets/img/img_Login.png';
import GoogleIcon from 'assets/img/ic_google.svg';
import { ReactComponent as Title } from 'assets/icon/ic_logo_wordmark_middle.svg';
import { ReactComponent as SubTitle } from 'assets/icon/Group.svg';
//loginState
import { LoginDispatchContext } from 'lib/context/context';
//api
import { postToken } from 'lib/api/sample';

const Styled = {
  Wrapper: styled.div`
    margin-top: 8.8rem;
    margin-left: calc(-50vw + 50%);
    display: flex;
    width: 100vw;
    height: 100vh;
  `,

  ImageContainer: styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${LoginImg});
    background-size: cover;
    background-position: center;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
    }
  `,

  Section: styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-wrapper {
      display: flex;
      flex-direction: column;

      h1 {
        width: 100%;
        height: 4.9rem;
        margin-bottom: 0.7rem;
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.black};
      }

      p {
        width: 100%;
        height: 2.2rem;
        margin-bottom: 7rem;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.color.gray3};
      }

      .google {
        border: 0.1rem solid #dfdfdf;
      }
    }
  `,

  Button: styled.button`
    width: 45.2rem;
    height: 4.8rem;
    background-color: ${(props) => props.color};
    border-radius: 2.1rem;
    padding-left: 1rem;
    margin-bottom: 1.7rem;
    color: #363636;
    font: ${({ theme }) => theme.font.gnb};
    line-height: 3rem;

    img {
      position: relative;
      top: 0.4rem;
      right: 1rem;
    }

    .naverIcon {
      right: 2.4rem;
    }

    .googleIcon {
      right: 3.1rem;
    }
  `,
};

const LoginLayer = () => {
  const history = useHistory();
  const setIsLogin = useContext(LoginDispatchContext);

  const handleSuccess = async (token, social) => {
    const data = await postToken(token, social);
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('ID', data.id);
    localStorage.setItem('issuedAt', data.issuedAt);

    setIsLogin(true);
    history.push('/');
  };

  // 로그인 실패 시
  const handleFailure = () => {};

  return (
    <Styled.Wrapper>
      <Styled.ImageContainer>
        <Title />
        <SubTitle style={{ marginTop: '2.1rem' }} />
      </Styled.ImageContainer>
      <Styled.Section>
        <div className="content-wrapper">
          <h1>Takeus 시작하기</h1>
          <p>SNS 계정으로 손쉽게 가입하고 Takers가 될 수 있어요 :)</p>
          <LoginKakao handleSuccess={handleSuccess} />
          <LoginNaver handleSuccess={handleSuccess} />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
            render={(renderProps) => (
              <Styled.Button className="google" type="button" color={'white'} onClick={renderProps.onClick}>
                <img className="googleIcon" src={GoogleIcon} alt="google" />
                구글로 시작하기
              </Styled.Button>
            )}
            onSuccess={(res) => handleSuccess(res.accessToken, 'google')}
            onFailure={handleFailure}
          />
        </div>
      </Styled.Section>
    </Styled.Wrapper>
  );
};

export default LoginLayer;
