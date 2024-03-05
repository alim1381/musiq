import { Box, Grid, Typography } from "@mui/material";
import { getClient } from "@/lib/graphql/client";
import AlbumIcon from "@mui/icons-material/Album";
import { GET_ALL_PLAYLISTS } from "@/lib/graphql/querys";
import Link from "next/link";

async function PlaylistsPage() {
  const playlists = await getClient().query({ query: GET_ALL_PLAYLISTS });
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        Playlists
      </Typography>

      <Grid container spacing={4} paddingY={2}>
        {playlists.data?.getPlaylists.map((playlist) => (
          <Grid
            item
            key={playlist.id}
            lg={2}
            xs={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link passHref href={`/playlists/${playlist.slug}`}>
              <Box
                sx={{
                  backgroundColor: "#212121",
                  borderRadius: 5,
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AlbumIcon fontSize="large" />
                <Box
                  sx={{
                    marginLeft: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6">{playlist.name}</Typography>
                  <Typography variant="body2" color={"text.secondary"}>
                    {playlist.userId.username}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PlaylistsPage;
