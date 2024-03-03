import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayTrackInPlayer from "../PlayTrackInPlayer";

function TrackInformation({ type, name, artist, image, likes, view, path }) {
  return (
    <>
      <Box
        sx={{
          padding: 10,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
        }}
      >
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className=" rounded-md"
        />
        <Box flexDirection="column" sx={{ marginLeft: { md: 5 } }}>
          <Typography component="div" fontWeight="bold">
            {name} - {artist}
          </Typography>
          <Typography color="text.secondary">#{type}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography color="text.secondary">
              <RemoveRedEyeIcon color="text.secondary" /> {view}
            </Typography>
            <Typography color="text.secondary">
              <FavoriteIcon color="text.secondary" /> {likes}
            </Typography>
          </Box>
          <Box
            sx={{ marginTop: 2, display: "flex", gap: 1, alignItems: "center" }}
          >
            <PlayTrackInPlayer
              url={path}
              title={`${name} - ${artist}`}
              tag={name}
            />
            <FavoriteBorderIcon fontSize="large" />
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default TrackInformation;
