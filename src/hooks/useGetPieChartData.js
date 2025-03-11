import { useMemo } from "react";
import { useSelector } from "react-redux";

// Hansı kursdan neçə satış olduğunu hesablayır
function useGetPieChartData() {
  const { purchases } = useSelector((state) => state.purchases);
  const { courses } = useSelector((state) => state.courses);

  const { coursesNames, data, backgroundColors } = useMemo(() => {
    const coursesNames = [];
    const data = [];

    const courseIdAndSalesCount = {};

    // Hər kursdan neçə satış olduğunu hesablamaq üçün kurs id-lərini obyektdə key olaraq saxlayıram. Hər course id-si courseIdAndSalesCount obyekti daxilində mövcudluğunu yoxlayıram varsa 1 artırıram yoxdursa həmin id-ni key olaraq əlavə edib dəyərini 1 yazıram.
    purchases.forEach((purchase) => {
      if (courseIdAndSalesCount[purchase.courseId]) {
        courseIdAndSalesCount[purchase.courseId] += 1;
      } else {
        courseIdAndSalesCount[purchase.courseId] = 1;
      }
    });

    // Loop ilə hər key və value-ları ayrı-ayrı array-lərə push edirəm. hər key-ə (course id) görə uyğun kursun adını tapıb "coursesNames" arrayinə push edirəm
    for (const [key, value] of Object.entries(courseIdAndSalesCount)) {
      const currentCourseName = courses.find((item) => item._id === key)?.name;
      coursesNames.push(currentCourseName);
      data.push(value);
    }

    const backgroundColors = data.map(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
    });

    return { coursesNames, data, backgroundColors };
  }, [courses, purchases]);

  console.log(coursesNames);
  const result = {
    labels: coursesNames,
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return result;
}

export default useGetPieChartData;
