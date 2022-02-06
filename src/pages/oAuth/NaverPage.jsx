import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading } from 'components';
import { postNaverToken } from 'lib/api/sample';
import { LoginDispatchContext } from 'lib/context/context';

const NaverPage = () => {
  const history = useHistory();
  const setIsLogin = useContext(LoginDispatchContext);
  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  const state = params.get('state');

  useEffect(() => {
    const getToken = async () => {
      const data = await postNaverToken(code, state);
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('ID', data.id);
      localStorage.setItem('email', data.email);
      localStorage.setItem('issuedAt', data.issuedAt);

      setIsLogin(true);
      history.push('/');
    };

    if (code && state) getToken();
  }, [code, state, history, setIsLogin]);

  return <Loading />;
};

export default NaverPage;
