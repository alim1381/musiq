import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TrackCard({
  name,
  artistName,
  contentImage,
  cardType,
  slug
}) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: "100%" }}>
      <Link href={cardType === "track" ? `/tracks/${slug}` : `/albums/${slug}`}>
        <CardActionArea>
          <Image
            src={`${
              process.env.STATIC_URL
                ? process.env.STATIC_URL
                : process.env.NEXT_PUBLIC_STATIC_URL
            }${contentImage}`}
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
              {artistName && artistName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
