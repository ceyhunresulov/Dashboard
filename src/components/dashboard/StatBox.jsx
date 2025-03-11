import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { BiFontSize } from "react-icons/bi";

function StatBox({ icon, title, value }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.palette.primary.main,
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 1,
          padding: 0
        }}
      >
        <Box
          sx={{
            fontSize: 30,
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.extraLight,
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          {icon}
        </Box>
        <Box sx={{}}>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: theme.palette.secondary.contrastText }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              color: theme.palette.primary.contrastText,
              fontWeight: "bold",
            }}
          >
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatBox;
