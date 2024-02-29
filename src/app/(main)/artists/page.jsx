import { Box, Grid, Typography } from "@mui/material";
import { getClient } from "@/lib/graphql/client";
import { GET_ALL_ARTISTS } from "@/lib/graphql/querys";
import ArtistCard from "../components/card/ArtistCard";
import Link from "next/link";

async function AlbumsPage() {
  const artists = await getClient().query({ query: GET_ALL_ARTISTS });
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        Artists
      </Typography>

      <Grid container spacing={4} paddingY={2}>
        {artists.data?.getArtists.map((artist) => (
          <Grid
            item
            key={artist.id}
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href={`/artists/${artist.slug}`} ><ArtistCard name={artist.name} contentImage={artist.avatar} /></Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AlbumsPage;
