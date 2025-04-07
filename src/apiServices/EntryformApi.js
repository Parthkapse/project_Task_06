import axiosInstance from "./axiosInstance";

const BASE_URL = "https://67f276deec56ec1a36d32e5a.mockapi.io/entries";

//to post details through form
export const addEntry = async (entry) => {
  const response = await axiosInstance.post(BASE_URL, entry);
  return response.data;
};

//form per only names aane ke liye
export const getEntries = async () => {
  const response = await axiosInstance.get(BASE_URL);
  return response.data;
};

//entryDetail
export const getSingleEntry = async (id) => {
  const response = await axiosInstance.get(`${BASE_URL}/${id}`);
  return response.data;
};
