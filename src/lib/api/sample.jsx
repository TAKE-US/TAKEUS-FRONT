import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 2000,
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

export const getCountry = async () => {
  try {
    const data = await instance.get("/api/airports/country");
    console.log(data.data);
    console.log("[SUCCESS] GET country data");
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET country data");
    throw e;
  }
};
