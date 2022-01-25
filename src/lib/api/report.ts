import axios from "axios";

const apiServer = "https://takeus.shop";
const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/" : apiServer,
});

export const postDogDetailReport = async (userId: string, dogDetailId: string): Promise<void> => {
  const body = {
    targetUser: userId,
    targetDog: dogDetailId,
  };
  try {
    await instance.post("/api/reports", body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
  } catch (e) {
    throw new Error("fail post report");
  }
};
