import { PreDateTime } from "./types";

/**
 * Checks if day, month, year, hours, minutes, seconds and milliseconds are equal.
 * @param first
 * @param second
 * @returns
 */
export const isDateTimeEqual = (
  first: PreDateTime,
  second: PreDateTime
): boolean => {
  return (
    first.day === second.day &&
    first.month === second.month &&
    first.year === second.year &&
    first.hours === second.hours &&
    first.minutes === second.minutes &&
    first.seconds === second.seconds &&
    first.milliseconds === second.milliseconds
  );
};
