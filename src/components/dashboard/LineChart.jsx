import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useGetLineChartData from "../../hooks/useGetLineChartData";
import { Box, Typography, useTheme } from "@mui/material";
import CustomDatePicker from "../common/CustomDatePicker";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const theme = useTheme();
  const chartData = useGetLineChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: null,
      },
      legend: {
        position: "top",
        labels: {
          color: theme.palette.primary.contrastText,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.primary.contrastText,
        },
        grid: {
          color: theme.palette.secondary.contrastText,
        },
      },
      y: {
        ticks: {
          color: theme.palette.primary.contrastText,
          stepSize: 1,
          precision: 0,
        },
        grid: {
          color: theme.palette.secondary.contrastText,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        paddingY: 6,
        paddingX: 4,
        boxSizing: "border-box",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: { xs: "300px", md: "400px", lg: "500px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& canvas": {
          width: "100% !important",
          height: "100% !important",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Users and Purchases Count
        </Typography>

        <CustomDatePicker format={"year"} />
      </Box>
      <Line data={chartData} options={options} />
    </Box>
  );
}

export default LineChart;
