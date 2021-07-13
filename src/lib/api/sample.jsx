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