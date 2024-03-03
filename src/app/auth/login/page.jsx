import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MainLogo from "@/app/(main)/components/layout/MainLogo";
import Link from "next/link";
import SignInForm from "../components/SignInForm";

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
          Sign In
        </Typography>
        <Box component="div" sx={{ mt: 1 }}>
          <SignInForm />
          <Grid container>
            <Grid item>
              <Link href="/auth/signup" className=" text-green-800">
                {"Do you not have an account? SignUp"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
