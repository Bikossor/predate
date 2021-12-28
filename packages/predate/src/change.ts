import { PreDate, PreDateTime, PreTime } from "./types";

export function change<T extends PreDate | PreDateTime | PreTime>(
  toChange: T,
  value: number,
  key: keyof T
): T {
  const oldValue = toChange[key] as unknown as number; // Not the best solution but it works as long as the keys of `T` are all `number`s

  return { ...toChange, [key]: oldValue + value };
}
