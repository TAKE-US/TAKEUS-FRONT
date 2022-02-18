import React, { useState } from 'react';
import { LoginStateContext, LoginDispatchContext } from './context';

const getIssuedAtTime = () => localStorage.getItem('issuedAt');
const getNowTime = () => Math.floor(+new Date() / 1000);
const ONE_HOUR = 3600;
const isValidToken = getNowTime() - +getIssuedAtTime() < ONE_HOUR;

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(isValidToken);

  return (
    <LoginStateContext.Provider value={isLogin}>
      <LoginDispatchContext.Provider value={setIsLogin}> {children}</LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default LoginProvider;
