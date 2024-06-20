"use client";
import { fetchDataFromApi } from "@/utils/api";
import { createContext, useEffect, useState } from "react";

const Context = createContext();

const AppContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("search/?q=New");
  }, []); // Ensure the dependency array is empty to prevent infinite loops

  const fetchData = async (url) => {
    // Make fetchData an async function
    const result = await fetchDataFromApi(url);
    console.log(result);
    setData(result);
  };

  const value = { data, setData };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default AppContext;
