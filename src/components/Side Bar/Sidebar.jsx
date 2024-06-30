import React from "react";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidedata } from "../../data/data";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Logo from "../Logo/Logo";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
// @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, setOpen }) => {
  const [openNested, setOpenNested] = useState({});
  const handleItemClick = (path) => {
    navigate(path);
  };
  const handleNestedClick = (index) => {
    setOpenNested((prevOpenNested) => ({
      ...prevOpenNested,
      [index]: !prevOpenNested[index],
    }));
  };
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open} sx={{ backgroundColor: "red" }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Logo open={open} />
      <List>
        {Sidedata.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? "#6062E8"
                        : "#E7E7FF"
                      : null,
                  // @ts-ignore
                  color: theme.palette.colorSidebar.colors,
                  mb: "5px",
                  width: "95%",
                  mx: "auto",
                  borderRadius: "8px",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    // @ts-ignore
                    bgcolor: theme.palette.colorSidebar.bg,
                    // @ts-ignore
                    color: theme.palette.colorSidebar.colors,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {item.nestedItems && item.nestedItems.length > 0 ? (
                  openNested[index] ? (
                    <ExpandLess onClick={() => handleNestedClick(index)} />
                  ) : (
                    <ExpandMore onClick={() => handleNestedClick(index)} />
                  )
                ) : null}
              </ListItemButton>
              <Collapse in={openNested[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.nestedItems.map((nestedItem, nestedIndex) => (
                    <ListItemButton
                      key={nestedIndex}
                      onClick={() => handleItemClick(nestedItem.path)}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        pl: 4,
                        bgcolor:
                          pathname === nestedItem.path
                            ? theme.palette.mode === "dark"
                              ? "#6062E8"
                              : "#E7E7FF"
                            : null,
                        // @ts-ignore
                        color: theme.palette.colorSidebar.colors,
                        mb: "5px",
                        width: "95%",
                        mx: "auto",
                        borderRadius: "8px",
                      }}
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary={nestedItem.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
