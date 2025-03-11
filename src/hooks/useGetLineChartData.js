import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { useTheme } from "@mui/material";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Bu chartda 1)aylıq olaraq neçə istifadəçinin tətbiqi istifadəyə başladığı göstərilir / 2)aylıq olaraq neçə kurs satıldığı göstərilir. Purchases array-də istifadəçilərin aldığı kurslar var və bu hesablama salesDate-ə görə aparılır. salesDate istifadəçinin kursu aldığı tarixdir. İlə görə filter mövcuddur.
function useGetLineChartData() {
  const theme = useTheme();
  const { users } = useSelector((state) => state.users);
  const { purchases } = useSelector((state) => state.purchases);
  const { lineChartDate } = useSelector((state) => state.datePicker);

  const selectedDate = new Date(lineChartDate);
  const selectedYear = selectedDate.getFullYear();

  // Hər render da hesablama olmasın deyə useMemo istifadə edirəm
  const { userDataset, purchaseDataset } = useMemo(() => {
    // bütün dəyərləri sıfır olan length - i 12 olan iki array yaradıram. Hər bir indexi İlin aylarına bərabərdir
    const userDataset = Array(12).fill(0);
    const purchaseDataset = Array(12).fill(0);

    for (const user of users) {
      // İstifadəçinin tətbiqə başlama ilini və ayını götürürəm.
      const joinDate = new Date(user.joinDate);
      const joinYear = joinDate.getFullYear();
      const joinMonth = joinDate.getMonth();

      // Əgər istifadəçinin tətbiqə başlama ili filterdən seçilmiş ildirsə yuxardakı arrayin uyğun index-ni 1 artırıram. Yuxardakı array-də 12 dəyər var. Buna əsasən joinMonth dəyəridə 0-11 aralığındadır. yəni joinMonth dəyəri yuxardakı array-in indexlərindən birinə uyğundur.
      if (selectedYear === joinYear) {
        userDataset[joinMonth]++;
      }
    }

    // User üçün yazılan məntiqlə eynidir
    for (const purchase of purchases) {
      const salesDate = new Date(purchase.salesDate);
      const salesYear = salesDate.getFullYear();
      const salesMonth = salesDate.getMonth();

      if (selectedYear === salesYear) {
        purchaseDataset[salesMonth]++;
      }
    }

    return { userDataset, purchaseDataset };
  }, [selectedYear, users, purchases]);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Users",
        data: userDataset,
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        borderWidth: 2,
      },
      {
        label: "Purchase",
        data: purchaseDataset,
        backgroundColor: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
        borderWidth: 2,
      },
    ],
  };

  console.log(data);

  return data;
}

export default useGetLineChartData;
