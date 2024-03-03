"use client";
import {
  changeTrack,
  getPlayerState,
  playerOpenOfClose,
} from "@/lib/redux/futures/playerSlice";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlayTrackInPlayer({ url, title, tag }) {
  const playerState = useSelector(getPlayerState);
  const dispatch = useDispatch();
  console.log(playerState);

  useEffect(() => {
    dispatch(changeTrack({ url, title, tag }));
    dispatch(playerOpenOfClose({ show: false }));
  }, []);

  const clickHandler = () => {
    dispatch(playerOpenOfClose({ show: true }));
    dispatch(changeTrack({ url, title, tag }));
    window.scroll(0, 0);
  };

  return (
    <div
      onClick={clickHandler}
      className=" cursor-pointer bg-white text-black p-2 rounded-full font-bold flex gap-1 items-center"
    >
      <PlayCircleIcon fontSize="large" />
      Show In Player
    </div>
  );
}

export default PlayTrackInPlayer;
