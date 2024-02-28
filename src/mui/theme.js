// src/theme.ts
"use client";
import { Nunito, Lato } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const nunito = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "black",
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
