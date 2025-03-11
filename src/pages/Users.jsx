import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../features/searchBar/searchBarSlice";
import { useEffect, useMemo } from "react";
import Navbar from "../components/layout/Navbar";
import { useTheme } from "@mui/material";
import { fetchUsers } from "../features/users/usersSlice";
import CustomTable from "../components/table/CustomTable";

const tableHeadData = ["Full Name", "Email", "Age", "Join Date"];
const tableRowData = ["fullName", "email", "age", "joinDate"];

function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { value } = useSelector((state) => state.search);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      value ? user.fullName.toLowerCase().includes(value.toLowerCase()) : users
    );
  }, [users, value]);

  useEffect(() => {
    dispatch(fetchUsers());
    return () => dispatch(setSearchValue(""));
  }, []);
  return (
    <>
      <Navbar search={true} title={"Users"} path={"pages / users"} />
      <CustomTable
        data={filteredUsers}
        tableHeadData={tableHeadData}
        tableRowData={tableRowData}
      />
    </>
  );
}

export default Users;
