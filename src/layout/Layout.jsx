import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Box, Container, Stack, useTheme } from "@mui/material";

function Layout() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          padding: 0,
          position: "relative",
        }}
      >
        <Sidebar />

        <Box flex={4} sx={{ padding: 2, boxSizing: "border-box" }}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}

export default Layout;
