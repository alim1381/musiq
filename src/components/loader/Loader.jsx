import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <CircularProgress color="success" />
    </div>
  );
}

export default Loader;
