import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

function CourseCard({ course }) {
  const theme = useTheme();
  return (
    <Card sx={{ width: "100%", backgroundColor: theme.palette.primary.main, borderRadius: '20px' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={course.coverPicture}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color: theme.palette.primary.contrastText}}>
          {course.name}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.secondary.contrastText }}>
          {course.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
