import React from "react";
import NewPlaylistForm from "./components/NewPlaylistForm";
import { Box, Typography } from "@mui/material";

function NewPlaylists() {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        Create Playlist
      </Typography>

      <NewPlaylistForm />
    </Box>
  );
}

export default NewPlaylists;
