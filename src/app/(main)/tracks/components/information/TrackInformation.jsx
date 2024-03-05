import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PlayTrackInPlayer from "../PlayTrackInPlayer";
import LikeAndDislike from "../like-and-dislike/LikeAndDislike";
import AddAndRemoveFromPlaylist from "../add-remove-from-playlist/AddAndRemoveFromPlaylist";

function TrackInformation({
  id,
  type,
  name,
  artist,
  image,
  likes,
  view,
  path,
  likers,
}) {
  return (
    <>
      <Box
        sx={{
          padding: { sm: 10, xs: 4 },
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
        <Box
          flexDirection="column"
          sx={{
            marginLeft: { md: 5 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography component="div" fontWeight="bold">
            {name} - {artist}
          </Typography>
          <Typography color="text.secondary">#{type}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography color="text.secondary">
              <RemoveRedEyeIcon color="text.secondary" /> {view}
            </Typography>
            <Typography color="text.secondary">
              <FavoriteIcon color="text.secondary" /> {likes}
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <PlayTrackInPlayer
              url={path}
              title={`${name} - ${artist}`}
              tag={name}
            />
            <Box sx={{ display: "flex", gap: 1 }}>
              <LikeAndDislike likers={likers} trackId={id} />
              <AddAndRemoveFromPlaylist trackId={id} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default TrackInformation;
