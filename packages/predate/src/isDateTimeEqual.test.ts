/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
import { createDateTime } from "./createDateTime";
import { isDateTimeEqual } from "./isDateTimeEqual";

describe("isDateTimeEqual", () => {
  it("should return true when two equal PreDateTime are given", () => {
    const firstDate = createDateTime.fromArray([2022, 0, 1, 12, 15, 30, 60]);
    const secondDate = createDateTime.fromArray([2022, 0, 1, 12, 15, 30, 60]);

    const actualIsEqual = isDateTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });

  it("should return false when two unequal PreDateTime are given", () => {
    const firstDate = createDateTime.fromArray([2022, 0, 1, 12, 15, 30, 60]);
    const secondDate = createDateTime.fromArray([2022, 1, 1, 12, 15, 30, 60]);

    const actualIsEqual = isDateTimeEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(false);
  });
});
