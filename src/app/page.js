"use client";

import { Context } from "@/AppContext/context";
import { useContext } from "react";

export default function Home() {
  const context = useContext(Context);
  return (
    <div className={`content ${context.toggle === true ? "expand" : ""}`}>
      <h1>Home page</h1>
    </div>
  );
}
