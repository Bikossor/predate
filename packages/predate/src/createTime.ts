import * as predate from "./";

export function createTime(time: {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds?: number;
  readonly milliseconds?: number;
}): predate.Time {
  return { ...time };
}
