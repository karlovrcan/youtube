"use client";
import { fetchDataFromApi } from "@/utils/api";
import { createContext, useEffect, useState } from "react";

const Context = createContext();

const AppContext = (props) => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);
  const [toggle, setToggle] = useState(false);
  const endPoint = "search";

  useEffect(() => {
    fetchData(endPoint, { q: selectedCat });
  }, [selectedCat]); // Add selectedCat as a dependency

  const fetchData = async (url, params) => {
    // try {
    //   const data = await fetchDataFromApi(url, params);
    //   setVideos(data.items);
    // } catch (error) {
    //   console.error("Failed to fetch data:", error);
    // }
  };

  const value = {
    selectedCat,
    setSelectedCat,
    videos,
    setVideos,
    fetchData,
    endPoint,
    setToggle,
    toggle,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default AppContext;
export { Context };
