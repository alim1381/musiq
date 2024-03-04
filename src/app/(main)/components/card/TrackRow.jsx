import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import LikeAndDislike from "../../tracks/components/like-and-dislike/LikeAndDislike";

function TrackRow({ track }) {
  return (
    <Box
      key={track.id}
      sx={{
        padding: 2,
        backgroundColor: "#111111",
        transition: "0.5s",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
        ":hover": { backgroundColor: "#212121" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AudiotrackIcon fontSize="large" />
        <Box flexDirection="column" sx={{ marginLeft: 2 }}>
          <Typography component="div" fontWeight="bold">
            {track.name}
          </Typography>
          <Typography color="text.secondary">{track.artist.name}</Typography>
        </Box>
      </Box>
      <Box>
        <Link href={`/tracks/${track.slug}`} passHref>
          <PlayCircleIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}

export default TrackRow;
