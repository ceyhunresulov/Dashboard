import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

function CourseCards() {
  const { courses } = useSelector((state) => state.courses);
  const { value } = useSelector((state) => state.search);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      value ? course.name.toLowerCase().includes(value.toLowerCase()) : courses
    );
  }, [courses, value]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr",lg: "1fr 1fr 1fr", xl: "1fr 1fr 1fr 1fr" },
        gap: 2,
      }}
    >
      {filteredCourses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </Box>
  );
}

export default CourseCards;
