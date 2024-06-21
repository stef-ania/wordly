import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.shecodes.io/images/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getPhotosDefinition = async (word) => {
  try {
    const response = await apiClient.get("/search", {
      params: {
        query: word,
        key: API_KEY,
      },
    });
    console.log("API SheCodesPexel response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getPhotosDefinition;
