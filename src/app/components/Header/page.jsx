"use client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Logo from "../../../assets/images/logoyoutube.png";
import { IoMenu } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import Button from "@mui/material/Button";
import Link from "next/link";
import Search from "./search";
import { useContext } from "react";
import { Context } from "@/AppContext/context";

const Header = () => {
  const context = useContext(Context);

  const toggleSidebar = () => {
    context.setToggle(!context.toggle);
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 d-flex align-items-center ">
            <Button
              className="button rounded-circle d-flex align-items-center justify-content-center"
              onClick={toggleSidebar}
            >
              <IoMenu className="text-white" />
            </Button>
            <Link href="/" className="mx-2 logo">
              <Image src={Logo} alt="Logo" priority />
            </Link>
          </div>
          <div className="col-sm-6 d-flex align-items-center">
            <Search />
          </div>
          <div className="col-sm-3 part3 d-flex align-items-center justify-content-end">
            <Button className="button rounded-circle d-flex align-items-center justify-content-center mx-3">
              <FaRegBell className="text-white" />
            </Button>
            <span className="rounded-circle overflow-hidden cursor">
              <img
                src="https://yt3.ggpht.com/yti/ANjgQV9cOVOStmMiqgvbj74aMdJzUdmrCmDmlzfu9wM1_1bvuZY=s88-c-k-c0x00ffffff-no-rj"
                alt="profile image"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
