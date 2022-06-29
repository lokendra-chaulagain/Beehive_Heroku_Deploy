import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://beehive-socialmedia.herokuapp.com/api/",
});
