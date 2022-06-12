import { PreDateTime, PreTime } from "./types";

/**
 * Checks if hours, minutes, seconds and milliseconds are equal. Day, month and year are ignored.
 * @param first
 * @param second
 * @returns
 */
export const isTimeEqual = (
  first: PreTime | PreDateTime,
  second: PreTime | PreDateTime
): boolean => {
  return (
    first.hours === second.hours &&
    first.minutes === second.minutes &&
    first.seconds === second.seconds &&
    first.milliseconds === second.milliseconds
  );
};
