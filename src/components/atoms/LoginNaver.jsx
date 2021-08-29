import { postToken } from 'lib/api/sample';

const handleNaver = async (token, social) => {
  const data = await postToken(token, social);
  localStorage.setItem('token', data.token);
  localStorage.setItem('ID', data.id);
  window.open('http://localhost:3000', '_self');
};

export const initializeNaverLogin = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = '6R8wLk9Dd9xVp9RDilRh';
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login';
  const naverLogin = new naver.LoginWithNaverId({
    clientId: NAVER_CLIENT_ID,
    callbackUrl: NAVER_CALLBACK_URL,
    isPopup: true,
    callbackHandle: true,
    loginButton: { color: 'white', type: 1, height: '47' },
  });
  naverLogin.init();
};

export const getUserProfile = () => {
  window.location.href.includes('access_token') && GetUser();
  function GetUser() {
    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    console.log('token: ', token);
    handleNaver(token, 'naver');
  }
};
