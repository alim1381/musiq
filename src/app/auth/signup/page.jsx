import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MainLogo from "@/app/(main)/components/layout/MainLogo";
import SignUpForm from "../components/SignUpForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainLogo />
        <Typography component="h2" variant="h5">
          Sign Up
        </Typography>
        <Box component="div" sx={{ mt: 1 }}>
          <SignUpForm />
          <Grid container>
            <Grid item>
              <Link href="/auth/login" className=" text-green-800">
                {"Do you have an account? LogIn"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
