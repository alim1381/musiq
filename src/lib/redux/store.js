import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./futures/playerSlice";

export const makeStore = configureStore({
  reducer: {
    playerState: playerSlice,
  },
});
