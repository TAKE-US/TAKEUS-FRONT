import React, { useEffect } from 'react';
import { Loading } from 'components';
import axios from 'axios';
import qs from 'qs';
import { postToken } from 'lib/api/sample';

const KakaoPage = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  const handleSuccess = async (token, social) => {
    const data = await postToken(token, social);
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('ID', data.id);
    localStorage.setItem('issuedAt', data.issuedAt);
    if (process.env.NODE_ENV === 'development') window.open('http://localhost:3000', '_self');
    else window.open('https://takeus-front.vercel.app/', '_self');
  };

  let redirectURL;
  if (process.env.NODE_ENV === 'development') redirectURL = 'http://localhost:3000/oauth/callback/kakao';
  else redirectURL = process.env.REACT_APP_KAKAO_REDIRECT;

  const getKakaoToken = async () => {
    const body = {
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_CLIENTID,
      redirect_uri: redirectURL,
      code: code,
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
      console.log('[SUCCESS] Kakao Login');
      return data.data.access_token;
    } catch (e) {
      console.log('[FAIL] Kakao Login');
      console.log(e);
      return e;
    }
  };

  useEffect(() => {
    if (code) getKakaoToken().then((data) => handleSuccess(data, 'kakao'));
  });

  return <Loading />;
};

export default KakaoPage;
