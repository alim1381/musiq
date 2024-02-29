import { Box, Grid, Typography } from "@mui/material";
import { getClient } from "@/lib/graphql/client";
import { GET_ALL_ALBUMS } from "@/lib/graphql/querys";
import TrackCard from "../components/card/Card";
import Link from "next/link";

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
            <Link href={`/albums/${album.slug}`} passHref>
              <TrackCard name={album.name} contentImage={album.cover} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AlbumsPage;
