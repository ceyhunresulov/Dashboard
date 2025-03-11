import React from "react";
import StatBox from "./StatBox";
import { Box } from "@mui/material";
import { PiUsersFourFill } from "react-icons/pi";
import { BiStats } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import useGetStatBoxesChartData from "../../hooks/useGetStatBoxesData";

function StatBoxes() {
  const { totalUsers, totlaCourses, totalSales } = useGetStatBoxesChartData();

  const data = [
    {
      Icon: <PiUsersFourFill />,
      title: "Total Users",
      value: totalUsers,
    },
    {
      Icon: <BiStats />,
      title: "Total Courses",
      value: totlaCourses,
    },
    {
      Icon: <AiFillDollarCircle />,
      title: "Total Sales",
      value: `$${totalSales}`,
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr 1fr" },
        gap: 2,
      }}
    >
      {data.map((item, i) => (
        <StatBox
          key={i}
          icon={item.Icon}
          title={item.title}
          value={item.value}
        />
      ))}
    </Box>
  );
}

export default StatBoxes;
