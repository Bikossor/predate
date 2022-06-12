/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { createTime } from "./createTime";
import { createDateTime } from "./createDateTime";
import { isTimeEqual } from "./isTimeEqual";

describe("isTimeEqual", () => {
  it("should return true when two equal PreTime are given", () => {
    const firstDate = createTime.fromArray([12, 15, 30, 60]);
    const secondDate = createTime.fromArray([12, 15, 30, 60]);

    const actualIsEqual = isTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });

  it("should return false when two unequal PreTime are given", () => {
    const firstDate = createTime.fromArray([12, 15, 30, 60]);
    const secondDate = createTime.fromArray([12, 20, 30, 60]);

    const actualIsEqual = isTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(false);
  });

  it("should return true when PreDate and PreDateTime with equal times are given", () => {
    const firstDate = createTime.fromArray([12, 15, 30, 60]);
    const secondDate = createDateTime.fromArray([2022, 0, 1, 12, 15, 30, 60]);

    const actualIsEqual = isTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });

  it("should return true when two PreDateTime with unequal dates are given", () => {
    const firstDate = createDateTime.fromArray([2022, 0, 1, 12, 15, 30, 60]);
    const secondDate = createDateTime.fromArray([2022, 1, 1, 12, 15, 30, 60]);

    const actualIsEqual = isTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });
});
