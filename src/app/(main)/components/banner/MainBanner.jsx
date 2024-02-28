"use client";
import { GET_TOP_TRACKS } from "@/lib/graphql/querys";
import { useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import { useEffect, useState } from "react";

function MainBanner() {
  const [item, setItem] = useState(0);
  const [tracks, setTracks] = useState([]);

  const {
    data: topTracksResponse,
    loading: topTracksLoading,
    error: topTracksError,
  } = useQuery(GET_TOP_TRACKS);

  useEffect(() => {
    if (topTracksResponse) {
      setTracks(topTracksResponse.getTracks);
    }
  }, [topTracksResponse]);

  useEffect(() => {
    if (tracks.length > 0) {
      let intervalId = setInterval(() => {
        setItem((oldItem) => (oldItem === tracks.length - 1 ? 0 : oldItem + 1));
      }, 5000);
      return () => clearInterval(intervalId); // clean up on unmount
    }
  }, [tracks]);

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        Top Tracks
      </Typography>

      <Box
        position={"relative"}
        marginY={2}
        sx={{
          backgroundColor: grey[900],
          width: "100%",
          height: { md: 500, xs: 200 },
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {!topTracksLoading && tracks.length !== 0 && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_URL}${tracks[item]?.album?.cover}`}
            width={800}
            height={500}
            alt="cover"
            priority={true}
            className=" absolute w-full h-full right-0"
          />
        )}
        <Box
          sx={{
            height: 90,
            background: "linear-gradient(to top, #000, #00000000)",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Box component={"div"} sx={{ padding: 3 }}>
            <Typography variant="h6" component={"h3"} fontWeight={700}>
              {tracks[item]?.name}
            </Typography>
            <Typography
              variant="body2"
              component={"h2"}
              color={"text.secondary"}
            >
              {tracks[item]?.artist?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
