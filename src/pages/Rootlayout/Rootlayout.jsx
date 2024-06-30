import { useState, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "../../components/App Bar/Appbar";
import Sidebar from "../../components/Side Bar/Sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "../../Utilits/functions/thems";
import Contentdashbord from "../../components/Content dashbord/Contentdashbord";
const Rootlayout = () => {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(localStorage.getItem("colorScheme"));
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar open={open} setOpen={setOpen} setMode={setMode} />
        <Sidebar open={open} setOpen={setOpen} />
        <Contentdashbord />
      </Box>
    </ThemeProvider>
  );
};
export default Rootlayout;
