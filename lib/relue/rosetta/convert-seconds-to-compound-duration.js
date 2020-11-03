function convertSeconds(s) {
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  let comp = '';

  if (s >= week) {
    if (s % week == 0) {
      comp = (s / week) + ' wk';
      return comp;
    } else {
      comp = Math.floor(s / week) + ' wk, ' + convertSeconds(s % week);
      return comp;
    }
  } else if (s >= day) {
    if (s % day == 0) {
      comp = (s / day) + ' d';
      return comp;
    } else {
      comp = Math.floor(s / day) + ' d, ' + convertSeconds(s % day);
      return comp;
    }
  } else if (s >= hour) {
    if (s % hour == 0) {
      comp = (s / hour) + ' hr';
      return comp;
    } else {
      comp = Math.floor(s / hour) + ' hr, ' + convertSeconds(s % hour);
      return comp;
    }
  } else if (s >= minute) {
    if (s % minute == 0) {
      comp = (s / minute) + ' min';
      return comp;
    } else {
      comp = Math.floor(s / minute) + ' min, ' + convertSeconds(s % minute);
      return comp;
    }
  } else {
    if (s > 0) {
      comp = s + ' sec';
    }
    return comp;
  }
}

console.log(convertSeconds(7259));
console.log(convertSeconds(86400));
console.log(convertSeconds(6000000));
