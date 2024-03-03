import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [
    {
      url: `${process.env.NEXT_PUBLIC_STATIC_URL}/tracks-sounds/Shadmehr-Aghili-Setareh-256.mp3`,
      title: "Setareh - Shadmehr Aghili",
      tags: ["pop"],
    },
  ],
  showPlayer: true,
};

export const player = createSlice({
  name: "Player",
  initialState: initialState,
  reducers: {
    changeTrack: (state, action) => {
      return {
        trackList: [
          {
            url: action.payload.url,
            title: action.payload.title,
            tags: [action.payload.tag],
          },
        ],
        showPlayer: true,
      };
    },
    playerOpenOfClose: (state , action) => {
      return {
        ...state,
        showPlayer: action.payload.show,
      };
    },
  },
});

export const { changeTrack, playerOpenOfClose } = player.actions;
export const getPlayerState = (state) => state.playerState;
export default player.reducer;
