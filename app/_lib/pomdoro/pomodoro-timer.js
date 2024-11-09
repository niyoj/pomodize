export const pomoCycle = [
  "focus",
  "break",
  "focus",
  "break",
  "focus",
  "longBreak",
];

// initializes the initial pomodoro value
export const pomodoroLength = {
  focus: 25,
  break: 5,
  longBreak: 30,
};

export function getIntervalPercentage() {
  const counts = {};
  for (let element of pomoCycle) {
    counts[element] = (counts[element] || 0) + 1;
  }

  const ret = { ...counts };
  for (const key in ret) {
    ret[key] *= pomodoroLength[key];
  }

  const total = Object.values(ret).reduce((acc, item) => acc + item, 0);

  for (const key in ret) {
    ret[key] = (pomodoroLength[key] / total) * 100;
  }

  return ret;
}

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
  return pomoCycle[(current + 1) % pomoCycle.length];
}

/**
 * Plays bell ring
 * */
export function ringBell() {
  const bellSound = new Audio("/sounds/bell.mp3");
  bellSound.currentTime = 0;
  bellSound.play();
}

/**
 * calculate difference between current and reference time expressed in percentage
 *
 * @param {object} ref - reference time
 * @param {object} current - current time
 *
 * @returns {number} The difference expressed in percentage; an integer
 * */
export function diffPercentage(current, ref) {
  const refInSeconds = ref.m * 60 + ref.s;
  const currentInSeconds = current.m * 60 + current.s;

  return Math.ceil((currentInSeconds / refInSeconds) * 100);
}
