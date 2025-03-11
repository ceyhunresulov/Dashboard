import { useMemo } from "react";
import { useSelector } from "react-redux";

function useGetStatBoxesChartData() {
  const { users } = useSelector((state) => state.users);
  const { courses } = useSelector((state) => state.courses);
  const { purchases } = useSelector((state) => state.purchases);

  const result = useMemo(() => {
    const totalUsers = users.length;
    const totlaCourses = courses.length;
    const totalSales = purchases.reduce((acc, curr) => acc + curr.payment, 0);

    return { totalUsers, totlaCourses, totalSales };
  }, [users, courses]);

  return result;
}

export default useGetStatBoxesChartData;
