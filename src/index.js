import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDate: document.querySelector('#date-picker'),
  inputTime: document.querySelector('#time-picker'),
};

flatpickr(refs.inputDate, {
  enableTime: false,
  altInput: true,
  altFormat: 'D M Y',
  dataFormat: 'Y-m-d',
});

flatpickr(refs.inputTime, {
  enableTime: true,
  time_24hr: true,
  altInput: true,
  altFormat: 'H:i',
  dataFormat: 'H:i',
  noCalendar: true,
});
