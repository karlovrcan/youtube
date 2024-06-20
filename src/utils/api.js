import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = "3882b15094mshf819ceb7e16ffc3p1c863ejsnbfe639312679";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  // Pass url as an argument
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
