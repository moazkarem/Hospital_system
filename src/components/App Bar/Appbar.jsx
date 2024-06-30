/* eslint-disable no-unused-vars */
// @ts-nocheck
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "@mui/material/styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Button from "../../Ui/Button";
import { useLocation } from "react-router-dom";
const storageKey = "logged";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const drawerWidth = 240;
// eslint-disable-next-line react/prop-types
const Appbar = ({ open, setOpen, setMode }) => {
  const { pathname } = useLocation();
  const logOuthandler = () => {
    console.log("log out ");
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);
    }, 1600);
  };
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar
        sx={{
          backgroundColor:
            // @ts-ignore
            theme.palette.bgHader.main,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            // @ts-ignore
            color: theme.palette.coloriconDark.main,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            color={
              // @ts-ignore
              theme.palette.coloriconDark.main
            }
          >
          Welcome To Our Dashbord
          </Typography>
          <Stack direction={"row"}>
            {theme.palette.mode === "light" ? (
              <IconButton
                // @ts-ignore
                sx={{ color: theme.palette.coloriconDark.main }}
                onClick={() => {
                  localStorage.setItem(
                    "colorScheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              >
                <Brightness4Icon />
              </IconButton>
            ) : (
              <IconButton
                // @ts-ignore
                sx={{ color: theme.palette.coloriconDark.main }}
                onClick={() => {
                  localStorage.setItem(
                    "colorScheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton
              sx={{
                // @ts-ignore
                color: theme.palette.coloriconDark.main,
                marginRight: "30px",
                marginLeft: "20px",
              }}
            >
              <NotificationsOutlinedIcon />
            </IconButton>

            <Button
              // @ts-ignore
              Button
              onClick={logOuthandler}
              styles={
                " text-[#ffffff] hover:bg-[#2A2B40] border px-12  border-1 border-[#5265FF] "
              }
            >
              {" "}
              Log out{" "}
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
