import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.shecodes.io/dictionary/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getWordDefinition = async (word) => {
  try {
    const response = await apiClient.get(`/define`, {
      params: {
        word: word,
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
