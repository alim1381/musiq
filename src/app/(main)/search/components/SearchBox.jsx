"use client";
import { Grid, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TrackCard from "../../components/card/Card";
import { useMutation } from "@apollo/client";
import { SEARCH_QUERY } from "@/lib/graphql/mutation";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { useParams, useSearchParams } from "next/navigation";

function SearchBox() {
  const params = useSearchParams();
  const searchTarget = params.get("name");
  const [text, setText] = useState("");

  const [searchTrack, { data, loading, error }] = useMutation(SEARCH_QUERY, {
    variables: { name: text },
  });

  useEffect(() => {
    if (searchTarget) setText(searchTarget);
    searchTrack();
  }, []);

  useEffect(() => {
    if (text) {
      searchTrack();
    }
  }, [text]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          id="search"
          sx={{ width: { sx: "100%", sm: "50%" } }}
          label={<SearchIcon />}
          placeholder="Search"
          value={text}
          variant="filled"
          color="success"
          onChange={(e) => setText(e.target.value)}
        />
      </Box>

      <Typography
        variant="body2"
        color={"text.secondary"}
        textAlign={"center"}
        paddingY={2}
      >
        Enter your desired phrase
      </Typography>

      {(!data || data?.searchTrack.length == 0) && (
        <Typography
          variant="h6"
          padding={6}
          textAlign={"center"}
          color={"text.secondary"}
        >
          No Results
        </Typography>
      )}

      {loading && <Loader />}

      <Grid container spacing={4} paddingY={2}>
        {!loading &&
          data?.searchTrack.map((track) => (
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TrackCard
                slug={track.slug}
                cardType={"track"}
                name={track.name}
                artistName={track.artist.name}
                contentImage={track.album.cover}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default SearchBox;
