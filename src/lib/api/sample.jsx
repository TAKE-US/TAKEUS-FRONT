import axios from "axios";

const instance = axios.create({
  baseURL: ""
});

export const getDogs = async () => {
  try {
    const data = await instance.get("/api/dogs");
    console.log(data);
    console.log("[SUCCESS] GET dogs data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] GET dogs data");
    return null;
  }
};

export const postMail = async (name, email, text) => {
  try {
    const data = await axios.post("/api/email", {
      body: {
        "name": name,
        "email": email,
        "text": text,
      }
    });
    console.log(data);
    console.log("{SUCCESS] POST email");
  } catch (e) {
    console.log("[FAIL] POST email");
    return null;
  }
};

export const getCountry = async () => {
  try {
    const data = await instance.get("/api/airports/country");
    console.log(data.data);
    console.log("[SUCCESS] GET country data");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET country data");
  }
};

export const getPageDogs = async num => {
  try {
    const data = await instance.get("/api/dogs", {
      params: {
        order: "latest",
        page: num,
      },
    });
    console.log(data);
    console.log("[SUCCESS] GET dogs data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET dogs data");
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
    console.log(data);
    console.log("[SUCCESS] GET review data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET review data");
    return null;
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
    console.log(data);
    console.log("[SUCCESS] GET dog search data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET dog search data");
    return null;
  }
};

export const getMyDogs = async num => {
  try {
    const data = await instance.get("/api/dogs/my", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": process.env.REACT_APP_MY_TOKEN,
      },
    });
    console.log(data);
    console.log("[SUCCESS] GET my dog data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET my dog data");
    return null;
  }
};

export const getMyReviews = async num => {
  try {
    const data = await instance.get("/api/reviews/list/my", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": process.env.REACT_APP_MY_TOKEN,
      },
    });
    console.log(data.data.data);
    console.log("[SUCCESS] GET my review data");
    return [data.data.data, data.data.totalNum];
  } catch (e) {
    console.log("[FAIL] GET my review data");
    return null;
  }
};
