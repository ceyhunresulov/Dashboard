import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import SearchBar from "../common/SearchBar";
import UserBox from "../common/UserBox";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FaBarsStaggered } from "react-icons/fa6";
import { SidebarContext } from "../../context/SideBarContext";

function Navbar({ search, title, path }) {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        marginBottom: 6,
        paddingY: 1,
        boxSizing: "border-box",
        borderRadius: "16px",
        top: "20px",
        backgroundColor: theme.palette.primary.light,
        width: "100%",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "start", lg: "center" },
          flexDirection: { xs: "column", lg: "row" },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            {path}
          </Typography>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.contrastText,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "30px",
            backgroundColor: theme.palette.primary.main,
            paddingX: 1,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
            minWidth: "100px",
            width: { xs: "100%", lg: "auto" },
            gap: 2,
          }}
        >
          {/*search*/ true && <SearchBar />}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{
                fontSize: 20,
                color: theme.palette.primary.contrastText,
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
                display: { lg: "none" },
              }}
              onClick={toggleSidebar}
            >
              <FaBarsStaggered />
            </IconButton>

            {(theme.palette.mode === "dark" && (
              <IoSunny
                size={20}
                cursor="pointer"
                color={theme.palette.primary.contrastText}
                onClick={toggleColorMode}
              />
            )) || (
              <IoMoon
                size={20}
                cursor="pointer"
                color={theme.palette.primary.contrastText}
                onClick={toggleColorMode}
              />
            )}
            <UserBox />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
