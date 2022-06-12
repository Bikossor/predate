import { PreDate, PreDateTime } from "./types";

/**
 * Checks if day, month and year are equal. Hours, minutes, seconds and milliseconds are ignored.
 * @param first
 * @param second
 * @returns
 */
export const isDateEqual = (
  first: PreDate | PreDateTime,
  second: PreDate | PreDateTime
): boolean => {
  return (
    first.day === second.day &&
    first.month === second.month &&
    first.year === second.year
  );
};
