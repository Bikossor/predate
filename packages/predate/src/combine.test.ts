/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { combine, createDate, createDateTime, createTime } from ".";

describe("combine", () => {
  it("should combine a PreDate and PreTime correctly", () => {
    const date = createDate.fromArray([2022, 1, 29]);
    const time = createTime.fromArray([12, 34, 56]);

    const expectedDate = createDateTime.fromArray([2022, 1, 29, 12, 34, 56]);

    const actualDate = combine(date, time);

    expect(actualDate).toStrictEqual(expectedDate);
  });
});
