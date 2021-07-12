import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 1000,
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
