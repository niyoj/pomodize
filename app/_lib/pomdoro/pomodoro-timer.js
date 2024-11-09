// initializes the initial pomodoro value
export const pomodoroLength = {
  focus: 25,
  break: 5,
  longBreak: 30,
};

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

/**
 * cycles the type of pomodoro session
 *
 * @param {string} current - The current type of pomodoro session
 *
 * @returns {string} The new type of pomodoro session
 * */
export function cyclePomodoroType(current) {
  const cycle = [
    "focus",
    "break",
    "focus",
    "break",
    "focus",
    "break",
    "longBreak",
  ];

  return cycle[(current + 1) % cycle.length];
}

/**
 * Plays bell ring
 * */
export function ringBell() {
  const bellSound = new Audio("/sounds/bell.mp3");
  bellSound.currentTime = 0;
  bellSound.play();
}
