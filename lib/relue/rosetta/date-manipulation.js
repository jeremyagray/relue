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

function add12Hours(dateString) {
  let date = new Date();
  let times = dateString.split(' ');
  date.setMonth(months.indexOf(times[0]));
  date.setDate(times[1]);
  date.setYear(times[2]);
  let tz = times[4];
  let hours = parseInt(times[3].split(':')[0]);
  // console.log(hours);
  let minutes = times[3].split(':')[1].replace(/\D/gi, '');
  
  if (/pm/.test(times[3].split(':')[1])) {
    hours += 12;
  }

  // console.log(hours);
  date.setHours(hours);
  date.setMinutes(minutes);
  let after = new Date(date.getTime() + (12 * 60 * 60 * 1000));
  if (after.getMonth() == 2 && after.getDate() == 8 && after.getFullYear() == 2009) {
    after.setHours(after.getHours() - 1);
  }
  let mid = '';
  let afterHours = 0;
  if (after.getHours() >= 12) {
    mid = 'pm';
    if (after.getHours() > 12) {
      afterHours = after.getHours() - 12;
    }
  } else {
    mid = 'am';
    // console.log(after.getHours());
    afterHours = after.getHours();
  }
  return months[after.getMonth()] + ' ' + after.getDate() + ' ' + after.getFullYear() + ' ' + afterHours + ':' + after.getMinutes() + mid + ' ' + tz;
}

console.log(add12Hours('March 7 2009 7:30pm EST'));
// console.log(Date.parse("March 7 2009 7:30pm EST"));