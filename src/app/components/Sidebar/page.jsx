"use client";
import { categories } from "@/utils/contents";
import "./style.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Context } from "@/AppContext/context";

const Sidebar = () => {
  const context = useContext(Context);

  const getCatData = (cat) => {
    context.setSelectedCat(cat); // Update selectedCat
  };

  return (
    <div
      className={`sidebarWrapper ${context.toggle === true ? "expand" : ""}`}
    >
      <div className="sidebar">
        {categories?.map((item, index) => {
          return (
            <div key={index}>
              <Button
                onClick={() => getCatData(item.name)}
                className={`d-flex ${
                  context.selectedCat === item.name ? "active" : ""
                }${context.toggle === true ? "flex-column" : ""}`}
              >
                <span className="icon">{item.icon}</span>
                {item.name === "New" ? "Home" : item.name}
              </Button>
              {item.divider === true && <div className="divider my-3"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
