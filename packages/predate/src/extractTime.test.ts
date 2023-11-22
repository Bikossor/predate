/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
import { createDateTime, extractTime } from ".";
import { PreTime } from "./types";

describe("extractTime", () => {
  it("should change a PreDate correctly", () => {
    const expected: PreTime = {
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const dateTime = createDateTime.fromArray([2022, 1, 14, 12, 34, 56]);

    const actual = extractTime(dateTime);

    expect(actual).toStrictEqual(expected);
  });
});
