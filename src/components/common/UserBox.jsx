import { Box, Typography, useTheme } from "@mui/material";

function UserBox() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "50%",
        backgroundColor: theme.palette.secondary.dark,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ fontSize: 15, color: 'white' }}
      >
        CR
      </Typography>
    </Box>
  );
}

export default UserBox;
