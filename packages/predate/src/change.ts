import * as predate from "./";

export function change<T extends predate.Date | predate.DateTime | predate.Time>(
  toChange: T,
  value: number,
  key: keyof T
): T {
  const oldValue = toChange[key] as unknown as number; // Not the best solution but it works as long as the keys of `T` are all `number`s

  return { ...toChange, [key]: oldValue + value };
}
