/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { change, createDate, createDateTime, createTime } from ".";

describe("change", () => {
  it("should change a PreDate correctly", () => {
    const date = createDate.fromArray([2022, 1, 29]);
    const expectedDate = createDate.fromArray([2023, 1, 29]);

    const actualDate = change(date, 1, "year");

    expect(actualDate).toStrictEqual(expectedDate);
  });

  it("should change a PreDateTime correctly", () => {
    const dateTime = createDateTime.fromArray([2022, 1, 29, 12, 0]);
    const expectedDateTime = createDateTime.fromArray([2023, 1, 29, 12, 0]);

    const actualDateTime = change(dateTime, 1, "year");

    expect(actualDateTime).toStrictEqual(expectedDateTime);
  });

  it("should change a PreTime correctly", () => {
    const time = createTime.fromArray([12,0]);
    const expectedTime = createTime.fromArray([13,0]);

    const actualTime = change(time, 1, "hours");

    expect(actualTime).toStrictEqual(expectedTime);
  });
});
