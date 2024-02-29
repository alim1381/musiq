import { CircularProgress } from "@mui/material";

function loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <CircularProgress color="success" />
    </div>
  );
}

export default loading;
