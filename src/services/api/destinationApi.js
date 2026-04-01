import axios from "axios";

const API = axios.create({
  baseURL: "https://rocky-holiday-trip-server.onrender.com/api",
});

export const fetchDestinations = async () => {
  try {
    const res = await API.get("/destinations");
    return res.data;
  } catch (error) {
    console.error("API ERROR:", error);
    return []; // prevent crash
  }
};