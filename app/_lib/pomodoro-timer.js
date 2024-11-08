/**
 * converts number to string and make every number two digit by adding zero at start
 *
 * @param {number} number - a single or double digit number
 *
 * @returns {number} The double digit number
 * */
export function makeDoubleDigit(number) {
  const numStr = String(number);

  // add one zero at beginning if only single digit
  if (numStr.length == 1) return `0${numStr}`;

  return numStr;
}

/**
 * Decreases timer value by one unit
 *
 * @param {object} time - object of m and s; minute and seconds respectively
 *
 * @returns {object} The next value decreased by 1 second
 **/
export function reverseTime(time) {
  const { m, s } = time;

  // check if time is over
  if (m === 0 && s === 0) {
    return { m, s };
  }

  // when second zero reduce minute by 1 unit else reduce second by 1 unit
  if (s === 0) {
    return { m: m - 1, s: 59 };
  } else {
    return { m, s: s - 1 };
  }
}
