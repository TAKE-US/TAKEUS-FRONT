import { createContext } from 'react';

export const LoginStateContext = createContext({
  isLogin: false,
});

export const LoginDispatchContext = createContext({
  setLoginTrue: () => {},
});
