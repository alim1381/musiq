import { getClient } from "@/lib/graphql/client";
import { GET_ONE_TRACK } from "@/lib/graphql/querys";
import { Box, Container, Typography } from "@mui/material";
import BackButton from "../../components/back-button/BackButton";
import TrackRow from "../../components/card/TrackRow";
import TrackInformation from "../components/information/TrackInformation";
import { revalidateAction } from "@/app/actions";

async function TrackPage({ params }) {
  const track = await getClient().query({
    query: GET_ONE_TRACK,
    variables: { slug: params.slug },
    fetchPolicy: "network-only",
  });

  revalidateAction(params.slug);

  return (
    <Container>
      <Box justifyContent={"space-between"} display="flex">
        <Typography variant="h6">Track</Typography>
        <BackButton />
      </Box>

      {/* Information */}
      <TrackInformation
        type={"music"}
        path={`${process.env.STATIC_URL}${track.data.getOneTrack.path}`}
        name={track.data.getOneTrack.name}
        image={`${process.env.STATIC_URL}${track.data.getOneTrack.album.cover}`}
        artist={track.data.getOneTrack.artist.name}
        likes={track?.data?.getOneTrack?.likes.length}
        view={track?.data?.getOneTrack?.listen_count}
      />

      {/* Tracks */}
      <Box sx={{ padding: 2 }}>
        {/* {track?.data?.getOneTrack?.tracks.map((track) => (
          <TrackRow track={track} />
        ))} */}
      </Box>
    </Container>
  );
}

export default TrackPage;
