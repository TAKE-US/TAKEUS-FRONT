import React, { useState } from 'react';
import { LoginStateContext, LoginDispatchContext } from './context';

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginStateContext.Provider value={isLogin}>
      <LoginDispatchContext.Provider value={setIsLogin}> {children}</LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};

export default LoginProvider;
