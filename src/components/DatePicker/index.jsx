import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function DatePicker(props) {
  const [dateTime, setDateTime]  = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleDateTimeChange = (date) => {
    console.log("fecha de date picker: ",dayjs(date).format('DD/MM/YYYY hh:mm'));
    setDateTime(date);
    props.onDateChange(date);
  };
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        
        <DateTimePicker
          label="Date Time picker"
          value={dateTime}
          onChange={handleDateTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}