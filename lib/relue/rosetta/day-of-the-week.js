const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function findXmasSunday(start, end) {
  let sundays = [];
  for (let year = start; year <= end; year++) {
    let xmas = new Date(year, 11, 25);
    if (xmas.getDay() == 0) {
      sundays.push(year);
    }
  }
  return sundays;
}
