import { useEffect } from "react";
import { setSearchValue } from "../features/searchBar/searchBarSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/layout/Navbar";
import CourseCards from "../components/courses/CourseCards";
import { fetchCourses } from "../features/courses/coursesSlice";

function Courses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    return () => dispatch(setSearchValue(""));
  }, []);
  return (
    <>
      <Navbar search={true} title={"Courses"} path={"pages / courses"} />
      <CourseCards />
    </>
  );
}

export default Courses;
