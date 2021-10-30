/* eslint-disable arrow-parens */
import axios from 'axios';

const apiServer = 'https://takeus.shop';
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : apiServer,
});

export const getDogs = async () => {
  try {
    const data = await instance.get('/api/dogs');
    console.log(data);
    console.log('[SUCCESS] GET dogs data');
    return data.data.data;
  } catch (e) {
    console.log('[FAIL] GET dogs data');
    throw e;
  }
};

export const postMail = async (name, email, text) => {
  const body = {
    name: name,
    email: email,
    text: text,
  };
  try {
    await axios.post('/api/email', body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log('{SUCCESS] POST email');
  } catch (e) {
    console.log('[FAIL] POST email');
    throw e;
  }
};

export const getCountry = async () => {
  try {
    const data = await instance.get('/api/airports/country');
    console.log('[SUCCESS] GET country data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET country data');
  }
};

export const getPageDogs = async (num, selected) => {
  try {
    const filter = selected === '최신순' ? 'latest' : 'oldest';
    const data = await instance.get('/api/dogs', {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET dogs data');
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log('[FAIL] GET dogs data');
    throw e;
  }
};

export const getDogDetail = async id => {
  try {
    const data = await instance.get(`/api/dogs/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('[SUCCESS] GET dog detail data');
    console.log(data);
    return data.data.data;
  } catch (e) {
    console.log('[FAIL] GET dog detail data');
    return null;
  }
};

export const getReviews = async num => {
  try {
    const data = await instance.get('/api/reviews', {
      params: {
        order: 'latest',
        page: num,
      },
    });
    console.log('[SUCCESS] GET review data');
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log('[FAIL] GET review data');
    throw e;
  }
};

export const getSearchDogs = async (airport, selectedFilter, num) => {
  const filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
  try {
    const data = await instance.get(`/api/dogs/search/${airport}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET dog search data');
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log('[FAIL] GET dog search data');
    throw e;
  }
};

export const getMyDogs = async (num, selectedFilter) => {
  const filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
  try {
    const data = await instance.get('/api/dogs/my', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET my dog data');
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log('[FAIL] GET my dog data');
    throw e;
  }
};

export const getMyReviews = async (num, selectedFilter) => {
  const filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
  try {
    const data = await instance.get('/api/reviews/list/my', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET my review data');
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log('[FAIL] GET my review data');
    throw e;
  }
};

export const getReviewDetail = async id => {
  try {
    const data = await instance.get(`/api/reviews/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    console.log('[SUCCESS] GET review detail data');
    return data.data.data;
  } catch (e) {
    console.log('[FAIL] GET my review data');
    throw e;
  }
};

export const getReviewsWithTags = async (hashtag = '', num, selectedFilter) => {
  try {
    const filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
    const data = await instance.get(`/api/reviews/${hashtag}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET review data with hashtag', data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET review data hashtag');
    throw e;
  }
};

export const getReviewsSearch = async (hashtag, num, selectedFilter, search) => {
  try {
    const filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
    const data = await instance.get(`/api/reviews/${search}?hashtags=${hashtag}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log('[SUCCESS] GET review search data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET review search data');
    throw e;
  }
};

export const postToken = async (token, social) => {
  const body = {
    token: token,
    social: social,
  };
  try {
    const data = await instance.post('/api/users/login', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('[SUCCESS] POST token');
    return data.data;
  } catch (e) {
    console.log('[FAIL] POST token');
    return null;
  }
};

export const postReview = async data => {
  const body = data;
  try {
    const data = await instance.post('/api/reviews', body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCCESS] POST reviews');
    return data;
  } catch (e) {
    console.log('[FAIL] POST reviews');
    return e;
  }
};

export const deleteReview = async id => {
  try {
    const res = await instance.delete(`/api/reviews/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(res);
    console.log('[SUCCESS] DELETE review');
    return res;
  } catch (e) {
    console.log('[FAIL] DELETE review');
    return e;
  }
};

export const deleteDog = async id => {
  try {
    const data = await axios.delete(`/api/dogs/detail/${id}`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCESS] DELETE dog detail');
  } catch (e) {
    console.log('[FAIL] DELETE dog detail');
    throw e;
  }
};

export const putReview = async (id, data) => {
  const body = Object.fromEntries(Object.entries(data).filter(([_, value]) => value));
  try {
    const data = await instance.put(`/api/reviews/detail/${id}`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCCESS] PUT reviews');
    return data;
  } catch (e) {
    console.log('[FAIL] PUT reviews');
    return e;
  }
};

export const postEnroll = async data => {
  console.log(data);
  const body = data;
  try {
    const data = await instance.post('/api/dogs', body, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCCESS] Post Enroll');
    return data;
  } catch (e) {
    console.log(e);
    console.log('[FAIL] Post Enroll');
    return e;
  }
};

export const putDog = async (dogId, data) => {
  const body = data;
  try {
    const data = await instance.put(`/api/dogs/detail/${dogId}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCCESS] PUT dog status');
    return data;
  } catch (e) {
    console.log('[FAIL] PUT dog status');
    return e;
  }
};

export const putDogStatus = async (dogId, data) => {
  const body = data;
  try {
    const data = await instance.put(`/api/dogs/detail/${dogId}/status`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    console.log(data);
    console.log('[SUCCESS] PUT dog status');
    return data;
  } catch (e) {
    console.log('[FAIL] PUT dog status');
    return e;
  }
};

export const getMyData = async () => {
  try {
    const data = await instance.get("/api/users/login", {
      header: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log(data);
    console.log("[SUCCESS] GET my data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] GET my data");
    throw e;
  }
};

export const postNaverToken = async (code, state) => {
  const body = {
    code: code,
    state: state,
  };
  console.log(code, state);
  try {
    const data = await instance.post("/api/users/naverLogin", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("[SUCCESS] Naver Login");
    return data.data;
  } catch (e) {
    console.log("[FAIL] Naver Login");
    return null;
  }
};