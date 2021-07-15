import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const getDogs = async () => {
  try {
    const data = await instance.get("/api/dogs");
    console.log(data);
    console.log("[SUCCESS] GET dogs data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] GET dogs data");
    throw e;
  }
};

export const postMail = async (name, email, text) => {
  try {
    await axios.post("/api/email", {
      body: {
        name: name,
        email: email,
        text: text,
      },
    });
    console.log("{SUCCESS] POST email");
  } catch (e) {
    console.log("[FAIL] POST email");
    throw e;
  }
};

export const getCountry = async () => {
  try {
    const data = await instance.get("/api/airports/country");
    console.log("[SUCCESS] GET country data");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET country data");
  }
};

export const getPageDogs = async (num, selected) => {
  try {
    const filter = selected === "최신순" ? "latest" : "oldest";
    const data = await instance.get("/api/dogs", {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log("[SUCCESS] GET dogs data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET dogs data");
    throw e;
  }
};

export const getDogDetail = async id => {
  try {
    const data = await instance.get(`/api/dogs/detail/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("[SUCCESS] GET dog detail data");
    console.log(data);
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] GET dog detail data");
    return null;
  }
};

export const getReviews = async num => {
  try {
    const data = await instance.get("/api/reviews", {
      params: {
        order: "latest",
        page: num,
      },
    });
    console.log("[SUCCESS] GET review data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET review data");
    throw e;
  }
};

export const getSearchDogs = async location => {
  try {
    const data = await instance.get(`/api/dogs/search/${location}`, {
      params: {
        order: "latest",
        page: 1,
      },
    });
    console.log("[SUCCESS] GET dog search data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET dog search data");
    throw e;
  }
};

export const getMyDogs = async (num, selectedFilter) => {
  const filter = selectedFilter === "최신순" ? "latest" : "oldest";
  try {
    const data = await instance.get("/api/dogs/my", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      params: {
        order: filter,
        page: num,
      },
    });
    console.log("[SUCCESS] GET my dog data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET my dog data");
    throw e;
  }
};

export const getMyReviews = async (num, selectedFilter) => {
  const filter = selectedFilter === "최신순" ? "latest" : "oldest";
  try {
    const data = await instance.get("/api/reviews/list/my", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      params: {
        order: filter,
        page: num,
      },
    });
    console.log("[SUCCESS] GET my review data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET my review data");
    throw e;
  }
};

export const getReviewsWithTags = async (hashtag, num, selectedFilter) => {
  try {
    const filter = selectedFilter === "최신순" ? "latest" : "oldest";
    const data = await instance.get(`/api/reviews/${hashtag}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log("[SUCCESS] GET review data with hashtag");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET review data hashtag");
    throw e;
  }
};

export const getReviewsSearch = async (hashtag, num, selectedFilter, search) => {
  try {
    const filter = selectedFilter === "최신순" ? "latest" : "oldest";
    const data = await instance.get(`/api/reviews/${search}?hashtags=${hashtag}`, {
      params: {
        order: filter,
        page: num,
      },
    });
    console.log("[SUCCESS] GET review search data");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET review search data");
    throw e;
  }
};

export const postToken = async (token, social) => {
  const body = {
    token: token,
    social: social,
  };
  console.log("body", body);
  try {
    const data = await instance.post("/api/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    console.log("[SUCCESS] POST token");
    return data.data;
  } catch (e) {
    console.log("[FAIL] POST token");
    return null;
  }
};

export const postReview = async data => {
  const body = data;
  try {
    const data = await instance.post("/api/reviews", body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log(data);
    console.log("[SUCCESS] POST reviews");
    return data;
  } catch (e) {
    console.log("[FAIL] POST reviews");
    return e;
  }
};

export const deleteReview = async id => {
  try {
    const res = await instance.delete(`/api/reviews/detail/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log(res);
    console.log("[SUCCESS] DELETE review");
    return res;
  } catch (e) {
    console.log("[FAIL] DELETE review");
    return e;
  }
};

export const deleteDog = async id => {
  try {
    const data = await axios.delete(`/api/dogs/detail/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log(data);
    console.log("[SUCESS] DELETE dog detail");
  } catch (e) {
    console.log("[FAIL] DELETE dog detail");
    throw e;
  }
};
