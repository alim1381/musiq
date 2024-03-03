"use client";
import { getPlayerState } from "@/lib/redux/futures/playerSlice";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { green } from "@mui/material/colors";
import { useSelector } from "react-redux";

function MusicPlayer() {
  const playerState = useSelector(getPlayerState);

  const colors = {
    playerBackground: "#212121",
    titleColor: "#ffffff",
    timeColor: "#ffffff",
    progressSlider: green[500],
    progressUsed: green[800],
    progressLeft: "#151616",
    bufferLoaded: "#202b1f",
    volumeSlider: green[500],
    volumeUsed: green[800],
    volumeLeft: "#151616",
  };
  return (
    <>
      {playerState.showPlayer && (
        <div className=" w-full mb-5">
          <Player
            trackList={playerState.trackList}
            customColorScheme={colors}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={false}
            autoPlayNextTrack={false}
          />
        </div>
      )}
    </>
  );
}

export default MusicPlayer;
