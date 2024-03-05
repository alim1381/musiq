import { getClient } from "@/lib/graphql/client";
import { GET_ONE_PLAYLIST } from "@/lib/graphql/querys";
import { Box, Container, Typography } from "@mui/material";
import BackButton from "../../components/back-button/BackButton";
import TrackRow from "../../components/card/TrackRow";
import InformationHeader from "../../components/information/InformationHeader";

async function PlaylistPage({ params }) {
  const playlist = await getClient().query({
    query: GET_ONE_PLAYLIST,
    variables: { slug: params.slug },
    fetchPolicy: "network-only",
  });

  return (
    <Container>
      <Box justifyContent={"space-between"} display="flex">
        <Typography variant="h6">Playlist</Typography>
        <BackButton />
      </Box>

      {/* Information */}
      <InformationHeader
        type={"Playlist"}
        title={playlist.data.getOnePlaylist.name}
        number={playlist?.data?.getOnePlaylist?.tracks?.length}
      />

      {/* Tracks */}
      <Box sx={{ padding: 2 }}>
        {playlist?.data?.getOnePlaylist?.tracks.map((track, index) => (
          <TrackRow
            key={index}
            playlist={playlist?.data?.getOnePlaylist}
            track={track}
          />
        ))}
      </Box>
    </Container>
  );
}

export default PlaylistPage;
