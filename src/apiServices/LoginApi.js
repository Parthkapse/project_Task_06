

import axiosInstance from "./axiosInstance";

const api_URL = "https://dummyjson.com/auth/login";

export const loginUser = async ({ username, password }) => {

  console.log("Sending credentials:", username, password);
  
  try {

    const response = await axiosInstance.post(api_URL, { username, password });
   
    console.log("Login API raw response:", response.data);
   
    return response.data;

  } catch (error) {
    throw error;
  }
};
