import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        p: 4,
        color: "white",
      }}
    >
      <Link
        to={"/"}
        style={{ color: "white", display: "flex", alignItems: "center" }}
      >
        <MdKeyboardBackspace></MdKeyboardBackspace> Back
      </Link>
      <Typography variant="h3">Page Not Found!</Typography>
    </Box>
  );
}

export default NotFound;
