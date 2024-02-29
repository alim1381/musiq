import { Box, Grid, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import Link from "next/link";

function PlaylistList({ title, list }) {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Grid container spacing={2} paddingY={2}>
        {list?.map((item, index) => (
          <Grid key={index} item lg={2} xs={6}>
            <Link passHref href={`/playlists/${item.slug}`}>
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
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color={"text.secondary"}>
                    {item.userId.username}
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

export default PlaylistList;
