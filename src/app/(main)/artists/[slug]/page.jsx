import { getClient } from "@/lib/graphql/client";
import { GET_ONE_ARTIST } from "@/lib/graphql/querys";
import { Box, Container, Typography } from "@mui/material";
import BackButton from "../../components/back-button/BackButton";
import TrackRow from "../../components/card/TrackRow";
import InformationHeader from "../../components/information/InformationHeader";

async function ArtistPage({ params }) {
  const artist = await getClient().query({
    query: GET_ONE_ARTIST,
    variables: { slug: params.slug },
  });

  return (
    <Container>
      <Box justifyContent={"space-between"} display="flex">
        <Typography variant="h6">Artist</Typography>
        <BackButton />
      </Box>

      {/* Information */}
      <InformationHeader
        type={"artist"}
        image={`${process.env.STATIC_URL}${artist.data.getOneArtist.information.avatar}`}
        title={artist.data.getOneArtist.information.name}
        number={artist?.data?.getOneArtist?.tracks?.length}
      />

      {/* Tracks */}
      <Box sx={{ padding: 2 }}>
        {artist?.data?.getOneArtist?.tracks.map((track, index) => (
          <TrackRow key={index} track={track} />
        ))}
      </Box>
    </Container>
  );
}

export default ArtistPage;
