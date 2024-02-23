// src/theme.ts
"use client";
import { Nunito, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const nunito = Nunito({
  weight: ["300", "400", "500", "700", "800"],
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
