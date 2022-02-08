import React, { useState } from 'react';
import { LoginStateContext, LoginDispatchContext } from './context';

const isValid = () => {
  const getIssuedAtTime = () => localStorage.getItem('issuedAt');
  const getNowTime = () => Math.floor(+new Date() / 1000);
  const ONE_HOUR = 3600;

  return getNowTime() - +getIssuedAtTime() < ONE_HOUR;
};

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const isValidToken = isValid();
  const loginState = isLogin & isValidToken;

  return (
    <LoginStateContext.Provider value={loginState}>
      <LoginDispatchContext.Provider value={setIsLogin}> {children}</LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default LoginProvider;
