import { Container, Typography } from "@mui/material";
import DropDown from "./components/DropDown";

function AboutUsPage() {
  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 8, sm: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        height: "100vh",
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Facilities and Features
      </Typography>
      <DropDown />
    </Container>
  );
}

export default AboutUsPage;
