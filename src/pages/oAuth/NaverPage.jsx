import React, { useEffect } from 'react';
import { Loading } from 'components';
import { postNaverToken } from 'lib/api/sample';

const NaverPage = () => {
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  const state = params.get('state');

  const openNewPage = () => {
    if (process.env.NODE_ENV === 'development') window.open('http://localhost:3000', '_self');
    else window.open('https://takeus-front.vercel.app/', '_self');
  };

  useEffect(() => {
    const getToken = async () => {
      const data = await postNaverToken(code, state);
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('ID', data.id);
      localStorage.setItem('email', data.email);
      localStorage.setItem('issuedAt', data.issuedAt);
      openNewPage();
    };

    if (code && state) getToken();
  }, [code, state]);

  return <Loading />;
};

export default NaverPage;
