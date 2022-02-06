import React, { useEffect, useContext } from 'react';
import { Loading } from 'components';
import axios from 'axios';
import qs from 'qs';
import { postToken } from 'lib/api/sample';
import { useHistory } from 'react-router-dom';
import { LoginDispatchContext } from 'lib/context/context';

const KakaoPage = () => {
  const code = new URL(window.location.href).searchParams.get('code');
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

  const getKakaoToken = async () => {
    const body = {
      grant_type: 'authorization_code',
      code: code,
      client_id: process.env.REACT_APP_KAKAO_CLIENTID,
      redirect_uri:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/oauth/callback/kakao'
          : process.env.REACT_APP_KAKAO_REDIRECT,
    };
    try {
      const data = await axios({
        method: 'POST',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(body),
      });
      return data.data.access_token;
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    if (code) getKakaoToken().then((data) => handleSuccess(data, 'kakao'));
  });

  return <Loading />;
};

export default KakaoPage;
