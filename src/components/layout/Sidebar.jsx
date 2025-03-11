import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { MdDashboard, MdPlayLesson } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../context/SideBarContext";

const tabs = [
  {
    name: "Dasboard",
    icon: <MdDashboard />,
    path: "/",
  },
  {
    name: "Users",
    icon: <FaUsersLine />,
    path: "/users",
  },
  {
    name: "Courses",
    icon: <MdPlayLesson />,
    path: "/courses",
  },
];

function Sidebar() {
  const theme = useTheme();
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();

  console.log(location.pathname);
  return (
    <Box
      flex={1}
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        height: "100%",
        position: { xs: "fixed", lg: "sticky" },
        left: 0,
        top: 0,
        zIndex: 2,
        width: {
          xs: isSidebarOpen ? "50%" : 0,
          sm: isSidebarOpen ? "40%" : 0,
          md: isSidebarOpen ? "30%" : 0,
          lg: "auto",
        },
        overflow: "hidden",
        transition: "all .3s linear",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "end",
          width: "100%",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <IoMdClose
          style={{ color: theme.palette.primary.contrastText }}
          size={24}
          onClick={() => toggleSidebar()}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
          paddingY: 6,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SiCoursera color={theme.palette.primary.contrastText} size={25} />
          <Typography variant="h5" color={theme.palette.primary.contrastText}>
            COURSERA
          </Typography>
        </Box>

        <Divider
          sx={{
            borderColor: theme.palette.primary.light,
            width: "100%",
            marginTop: 4,
          }}
        />
      </Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          paddingX: 4,
          boxSizing: "border-box",
        }}
      >
        {tabs.map((tab, i) => (
          <Link key={i} to={tab.path}>
            <ListItemButton
              sx={{
                borderRightWidth: tab.path === location.pathname ? 3 : 0,
                borderStyle: "solid",
                borderColor: theme.palette.secondary.main,
                paddingY: 0,
                marginBottom: 2,
              }}
            >
              <ListItemIcon
                sx={{ color: theme.palette.primary.contrastText, fontSize: 20 }}
              >
                {tab.icon}
              </ListItemIcon>
              <ListItemText
                primary={tab.name}
                sx={{
                  color: theme.palette.primary.contrastText,
                  ".MuiListItemText-primary": {
                    fontWeight: tab.path === location.pathname ? 900 : "",
                  },
                }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
