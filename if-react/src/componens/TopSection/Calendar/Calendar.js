import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      dateFormat="MMMM d"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      showPopperArrow={false}
      minDate={new Date()}
      monthsShown={2}
      placeholderText="Check-in - Check-out"
    />
  );
};

export default Calendar;
