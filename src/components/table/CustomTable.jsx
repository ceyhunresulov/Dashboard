import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

function CustomTable({ data, tableHeadData, tableRowData }) {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        padding: 2,
        boxSizing: "border-box",
        "& .MuiTableCell-head": {
          color: theme.palette.secondary.contrastText + " !important",
          fontWeight: "bold",
          fontSize: "16px",
        },
        "& .MuiTableCell-root": {
          color: theme.palette.primary.contrastText,
        },
        "& .MuiTableRow-root:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadData.map((item, i) => (
              <TableCell key={i} align="left">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {tableRowData.map((key, i) => (
                <TableCell key={i} align="left">
                  {item[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
