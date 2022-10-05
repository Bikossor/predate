/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { createDateTime, extractDate } from ".";
import { PreDate } from "./types";

describe("extractDate", () => {
  it("should change a PreDate correctly", () => {
    const expected: PreDate = {
      day: 14,
      month: 1,
      year: 2022,
    };

    const dateTime = createDateTime.fromArray([2022, 1, 14, 12, 34, 56]);

    const actual = extractDate(dateTime);

    expect(actual).toStrictEqual(expected);
  });
});
