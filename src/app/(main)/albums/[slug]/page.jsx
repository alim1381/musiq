import { getClient } from "@/lib/graphql/client";
import { GET_ONE_ALBUM } from "@/lib/graphql/querys";
import { Box, Container, Typography } from "@mui/material";
import BackButton from "../../components/back-button/BackButton";
import TrackRow from "../../components/card/TrackRow";
import InformationHeader from "../../components/information/InformationHeader";

async function AlbumPage({ params }) {
  const album = await getClient().query({
    query: GET_ONE_ALBUM,
    variables: { slug: params.slug },
  });

  return (
    <Container>
      <Box justifyContent={"space-between"} display="flex">
        <Typography variant="h6">Albom</Typography>
        <BackButton />
      </Box>

      {/* Information */}
      <InformationHeader
        type={"album"}
        image={`${process.env.STATIC_URL}${album.data.getOneAlbum.information.cover}`}
        title={album.data.getOneAlbum.information.name}
        number={album?.data?.getOneAlbum?.tracks?.length}
      />

      {/* Tracks */}
      <Box sx={{ padding: 2 }}>
        {album?.data?.getOneAlbum?.tracks.map((track) => (
          <TrackRow track={track} />
        ))}
      </Box>
    </Container>
  );
}

export default AlbumPage;
