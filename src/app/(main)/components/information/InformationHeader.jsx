import { Box, Divider, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import Image from "next/image";

function InformationHeader({ type, title, image, number }) {
  return (
    <>
      <Box
        sx={{
          padding: 10,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
        }}
      >
        {!image && <AlbumIcon fontSize="large" />}

        {image && (
          <Image
            src={image}
            alt={title}
            height={200}
            width={200}
            className=" rounded-md"
          />
        )}
        <Box flexDirection="column" sx={{ marginLeft: { md: 5 } }}>
          <Typography component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography color="text.secondary">#{type}</Typography>
          <Typography color="text.secondary">
            Number Of Track : {number}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default InformationHeader;
