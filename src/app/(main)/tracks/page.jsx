import { Box, Grid, Typography } from "@mui/material";
import TrackCard from "../components/card/Card";
import { getClient } from "@/lib/graphql/client";
import { GET_TRACKS } from "@/lib/graphql/querys";

async function NewTracks() {
  const newTracks = await getClient().query({
    query: GET_TRACKS,
    variables: { limit: 0, category: "new-tracks" },
  });
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        New Tracks
      </Typography>

      <Grid container spacing={4} paddingY={2}>
        {newTracks.data?.getTracks.map((track) => (
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <TrackCard
              name={track.name}
              artistName={track.artist.name}
              contentImage={track.album.cover}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewTracks;
