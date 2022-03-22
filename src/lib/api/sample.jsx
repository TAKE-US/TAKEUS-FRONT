/* eslint-disable arrow-parens */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : process.env.REACT_APP_API_DOMAIN,
});

export const getDogs = async () => {
  try {
    const { data } = await instance.get('/api/dogs');
    return data;
  } catch (e) {
    return e;
  }
};

export const postMail = async (name, email, text) => {
  const body = {
    name: name,
    email: email,
    text: text,
  };
  try {
    await instance.post('/api/email', body, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  } catch (e) {
    return e;
  }
};

export const getCountry = async () => {
  try {
    const data = await instance.get('/api/airports/country');
    return data.data;
  } catch (e) {
    return [];
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
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    return e;
  }
};

export const getDogDetail = async (id) => {
  try {
    const data = await instance.get(`/api/dogs/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data.data;
  } catch (e) {
    return null;
  }
};

export const getReviews = async (num) => {
  try {
    const data = await instance.get('/api/reviews', {
      params: {
        order: 'latest',
        page: num,
      },
    });
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    return e;
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
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    return e;
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
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    return e;
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
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    return e;
  }
};

export const getReviewDetail = async (id) => {
  try {
    const data = await instance.get(`/api/reviews/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data.data;
  } catch (e) {
    return e;
  }
};

export const getReviewsWithTags = async (hashtag = '', num, selectedFilter) => {
  try {
    let filter= '';
    if (selectedFilter) {
      filter = selectedFilter === '최신순' ? 'latest' : 'oldest';
    } else {
      filter = 'latest';
    }
    const data = await instance.get(`/api/reviews/${hashtag}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    return data.data;
  } catch (e) {
    return e;
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
    return data.data;
  } catch (e) {
    return e;
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
    return data.data;
  } catch (e) {
    return null;
  }
};

export const postReview = async (body) => {
  const data = await instance.post('/api/reviews', body, {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token'),
    },
  });
  return data;
};

export const deleteReview = async (id) => {
  try {
    const res = await instance.delete(`/api/reviews/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const deleteDog = async (id) => {
  try {
    await instance.delete(`/api/dogs/detail/${id}`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  } catch (e) {
    return e;
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
    return data;
  } catch (e) {
    return e;
  }
};

export const postEnroll = async (data) => {
  const body = data;
  try {
    const data = await instance.post('/api/dogs', body, {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
    return e;
  }
};

export const putDog = async (dogId, data) => {
  const body = data;
  try {
    const data = await instance.patch(`/api/dogs/detail/${dogId}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    return data;
  } catch (e) {
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
    return data;
  } catch (e) {
    return e;
  }
};

export const getMyData = async () => {
  try {
    const data = await instance.get('/api/users/login', {
      header: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    return data.data.data;
  } catch (e) {
    return e;
  }
};

export const postNaverToken = async (code, state) => {
  const body = {
    code: code,
    state: state,
  };
  try {
    const data = await instance.post('/api/users/naverLogin', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data;
  } catch (e) {
    return null;
  }
};
