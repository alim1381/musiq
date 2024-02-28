import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function TrackCard({ name, artist, album }) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: "100%" }}>
      <CardActionArea>
        <Image
          src={`${process.env.STATIC_URL}${album.cover}`}
          width={300}
          height={300}
          priority={true}
          alt="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {artist?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
