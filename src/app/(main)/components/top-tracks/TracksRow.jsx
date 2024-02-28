import { Box, Grid, Typography } from "@mui/material";
import TrackCard from "../card/Card";

function TracksRow({ title, list }) {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Grid container spacing={2} paddingY={2} justifyContent={"space-between"}>
        {list?.map((item, index) => (
          <Grid key={index} item lg={2} xs={6}>
            <TrackCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TracksRow;
