import { Box, Typography, useTheme } from "@mui/material";
import StatBox from "../components/dashboard/StatBox";
import StatBoxes from "../components/dashboard/StatBoxes";
import LineChart from "../components/dashboard/LineChart";
import { useDispatch } from "react-redux";
import useGetLineChartData from "../hooks/useGetLineChartData";
import { fetchPurchases } from "../features/purchases/purchasesSlice";
import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";
import PieChart from "../components/dashboard/PieChart";
import { fetchCourses } from "../features/courses/coursesSlice";
import BarChart from "../components/dashboard/BarChart";
import Navbar from "../components/layout/Navbar";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPurchases());
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      <Navbar search={false} title={"Dashboard"} path={"pages / dashboard"} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <StatBoxes />
        <LineChart />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", lg: "row" },
            boxSizing: "border-box",
            height: { xs: "auto", lg: "350px", xl: "400px" },
          }}
        >
          <BarChart />
          <PieChart />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
