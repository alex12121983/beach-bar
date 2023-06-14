import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { inputDate, inputTime } from './refs';

// inputDate.addEventListener('click', () => {
//   console.log('it works');
// });

const options = {
  altInput: true,
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
};

// const config = {
//   enableTime: true,
//   noCalendar: true,
//   dateFormat: 'H:i',
//   time_24hr: true,
// };

flatpickr(inputDate, options);

// flatpickr(inputTime, config);
