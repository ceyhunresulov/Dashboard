import { Box, TextField, useTheme } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../features/searchBar/searchBarSlice";
import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

function SearchBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.search);

  const onHandleSearch = (value) => {
    dispatch(setSearchValue(value));
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        height: 18,
        width: { sx: "40%", lg: "65%" },
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "30px",
        overflow: "hidden",
        gap: 1,
        paddingX: 1,
        paddingY: 0.9,
      }}
    >
      <IoMdSearch size={25} />
      <TextField
        id="standard-basic"
        variant="standard"
        placeholder="Search..."
        value={value}
        onChange={(e) => onHandleSearch(e.target.value)}
        InputProps={{
          disableUnderline: true, // Alt xətti (underline) tamamilə silir
        }}
        sx={{
          padding: 0,
          border: 0,
          input: {
            color: theme.palette.primary.contrastText,
            fontSize: "13px",
            "&::placeholder": {
              opacity: 1,
              color: theme.palette.secondary.contrastText,
              fontSize: "13px",
            },
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
