import { Api } from "@mui/icons-material";
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY = "3882b15094mshf819ceb7e16ffc3p1c863ejsnbfe639312679";

const options = {
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// export const fetchDataFromApi = async (url) => {
//   // Pass url as an argument
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };

export const fetchDataFromApi = async (url, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      ...options,
      params: { ...options.params, ...params },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
      console.error("Error response headers:", error.response.headers);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

//AIzaSyDv_MflzLPrEF1Ty5z55mBgt38s0ZdBUVo
