import * as predate from "./";

export function createDate(date: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}): predate.Date {
  return { ...date };
}
