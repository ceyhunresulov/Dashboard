import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";

// Yaş aralığına görə istifadəçilərin sayını təyin edirəm. Yaş intervalı 5 olmalıdır. Məslən, 10-15 yaş aralığında 4 tələbə var, 15-20 yaş aralığında 7 və s.

function useGetBarChartData() {
  const theme = useTheme();
  const { users } = useSelector((state) => state.users);

  //  Hər renderda bu hesablamanı etməsin deyə useMemo hook-dan istifadə edirəm. Yalnız istifadəçi məlumatları yeniləndikdə yenidən bu hesablama aparılır.
  const { data, ageRanges } = useMemo(() => {
    const sortedUsers = users
      .map((user) => ({ ...user }))
      .sort((a, b) => a.age - b.age);
    const data = [];
    const ageRanges = [];

    const ageRangeAndUserCount = {};

    sortedUsers.forEach((user) => {
      // Burda hər istifadəçinin hansı yaş aralığında olduğunu tapıram. Yaşı 5-ə böldükdə qalan ədədin tam hissəsini yenə 5-ə vurduqda yaş aralığının birinci hissəsini alıram. Sonra da üzərinə 5 gəlirəm.
      const roundedAge = Math.floor(user.age / 5) * 5;
      const ageRange = `${roundedAge} / ${roundedAge + 5}`;

      // Burda hər yaş aralığını "ageRangeAndUserCount" obyektində key olaraq saxlayırma. Əgər objectdə bu key varsa həmin key üzərinə 1 gəlir əks halda həmin yaş aralığını key olaraq əlavə edib dəyərini 1 bərabər edir
      if (ageRangeAndUserCount[ageRange]) {
        ageRangeAndUserCount[ageRange] += 1;
      } else {
        ageRangeAndUserCount[ageRange] = 1;
      }
    });

    // Loop ilə key və value-lar ayrı-ayrı array-lərə push olunur
    for (const [key, value] of Object.entries(ageRangeAndUserCount)) {
      ageRanges.push(key);
      data.push(value);
    }

    return { ageRanges, data };
  }, [users]);

  const result = {
    labels: ageRanges,
    datasets: [
      {
        data,
        backgroundColor: [theme.palette.secondary.main],
        borderWidth: 1,
      },
    ],
  };

  return result;
}

export default useGetBarChartData;
