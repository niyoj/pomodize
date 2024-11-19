import { makeDoubleDigit } from "../pomdoro/pomodoro-timer";

/**
 * Converts millisecond to object for display
 *
 * @param {number} millis - milliseconds
 * @returns {object} - milliseconds converted to object of hour, minute, second and millisecond
 **/
export function millisToObj(millis) {
  const ms = millis % 1000;
  const s = Math.floor(millis / 1000) % 60;
  const m = Math.floor(millis / (1000 * 60)) % 60;
  const h = Math.floor(millis / (1000 * 60 * 60)) % 60;

  return { h, m, s, ms };
}

/**
 * converts the timer object to string for display
 *
 * @param {object} obj - time object
 * @returns {string} - string in format HH:MM:SS or MM:SS.xx
 **/
export function objToStr(obj) {
  const ms = makeDoubleDigit(obj.ms ?? 0)?.slice(0, 2); // showing only first two most significant digits
  const s = makeDoubleDigit(obj.s ?? 0);
  const m = makeDoubleDigit(obj.m ?? 0);
  const h = makeDoubleDigit(obj.h ?? 0);

  if (obj.h) return `${h}:${m}:${s}`;

  return `${m}:${s}.${ms}`;
}

export function millisToStr(millis) {
  return objToStr(millisToObj(millis));
}
