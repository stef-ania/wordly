import axios from "axios";

const API_PHOTOS_KEY = process.env.NEXT_PUBLIC_API_PHOTOS_KEY;

const apiClient = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_PHOTOS_KEY}`,
  },
});

export const getImageDefinition = async (word) => {
  try {
    const response = await apiClient.get("/search", {
      params: {
        query: word,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
