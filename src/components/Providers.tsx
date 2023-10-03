"use client";
import { ReactNode } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SessionProvider } from "next-auth/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ThemeProvider from "@/@core/theme/ThemeProvider";

interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
