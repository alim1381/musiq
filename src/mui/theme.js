// src/theme.ts
"use client";
import { Lato } from "next/font/google";
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
    primary: { main: "#4caf50" },
  },
});

export default theme;
