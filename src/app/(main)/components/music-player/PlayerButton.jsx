"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  getPlayerState,
  playerOpenOfClose,
} from "@/lib/redux/futures/playerSlice";

// icons
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function PlayerButton() {
  const playerState = useSelector(getPlayerState);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(playerOpenOfClose({ show: !playerState.showPlayer }));
    window.scroll(0, 0);
  };

  return (
    <button
      onClick={clickHandler}
      className=" fixed bottom-4 right-5 bg-black text-white border z-50 p-2 rounded-full"
    >
      Player {playerState.showPlayer ? <OpenInNewOffIcon /> : <OpenInNewIcon />}
    </button>
  );
}

export default PlayerButton;
