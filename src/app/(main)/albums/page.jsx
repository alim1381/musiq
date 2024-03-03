import { Box, Grid, Typography } from "@mui/material";
import { getClient } from "@/lib/graphql/client";
import { GET_ALL_ALBUMS } from "@/lib/graphql/querys";
import TrackCard from "../components/card/Card";

async function AlbumsPage() {
  const albums = await getClient().query({ query: GET_ALL_ALBUMS });
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        Albums
      </Typography>

      <Grid container spacing={4} paddingY={2}>
        {albums.data?.getAlbums.map((album) => (
          <Grid
            item
            key={album.id}
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
              <TrackCard slug={album.slug} cardType={"album"} name={album.name} contentImage={album.cover} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AlbumsPage;
