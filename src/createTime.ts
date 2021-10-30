import { Time } from "./types";

export function createTime(time: {
  hours: number;
  minutes: number;
  seconds?: number;
  milliseconds?: number;
}): Time {
  return { ...time };
}
