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
