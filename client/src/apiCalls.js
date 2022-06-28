import axios from "axios";
import { axiosInstance } from "./config";

//UserDetails
export const userDetail = async () => {
  try {
    await axiosInstance.get("/userDetails/get/all");
  } catch (error) {
    console.log(error);
  }
};
