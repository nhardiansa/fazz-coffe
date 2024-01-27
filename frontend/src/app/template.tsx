'use client'

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { rubik } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: [
      rubik.style.fontFamily
    ].join(',')
  }
});

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
