"use client";

import { CREATE_PLAYLIST } from "@/lib/graphql/mutation";
import { useMutation } from "@apollo/client";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NewPlaylistForm() {
  const router = useRouter();
  const [name, setName] = useState("");

  const [create, { data, loading, error }] = useMutation(CREATE_PLAYLIST, {
    variables: { name },
  });

  const onSubmit = () => {
    if (name.length > 0) {
      const newSlug = name.replaceAll(" ", "").toLowerCase();
      console.log(newSlug);
      create().then((res) => router.push(`/playlists/${newSlug}`));
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, marginY: 2 }}>
        <TextField
          label={"Playlist Name"}
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={onSubmit} variant="contained">
          Create
        </Button>
      </Box>

      {data && (
        <Alert sx={{ marginY: 1 }} severity="success">
          Playlist successfully created.
        </Alert>
      )}
      {error && (
        <Alert sx={{ marginY: 1 }} severity="error">
          {error.message}.
        </Alert>
      )}
      {loading && (
        <Alert sx={{ marginY: 1 }} severity="info">
          Making a new playlist...
        </Alert>
      )}
    </>
  );
}

export default NewPlaylistForm;
