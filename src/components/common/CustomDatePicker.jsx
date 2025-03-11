import { useState } from "react";
import DatePicker from "react-datepicker";
import "./datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setLineChartDate } from "../../features/datePicker/datePickerSlice";

function CustomDatePicker({ format }) {
  const dispatch = useDispatch();
  const { lineChartDate } = useSelector((state) => state.datePicker);

  console.log(lineChartDate);
  return (
    <>
      {format === "year" && (
        <DatePicker
          selected={lineChartDate}
          onChange={(date) => dispatch(setLineChartDate(date))}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={30}
          calendarClassName="calendar"
          wrapperClassName="wrapper"
          className="input"
        />
      )}
    </>
  );
}

export default CustomDatePicker;
