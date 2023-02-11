import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { changeDateFrom, changeDateTo } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDateFrom(new Date(startDate).getTime()));
    dispatch(changeDateTo(new Date(endDate).getTime()));
  }, [startDate, endDate]);

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
