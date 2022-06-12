/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { createDate } from "./createDate";
import { createDateTime } from "./createDateTime";
import { isDateEqual } from "./isDateEqual";

describe("isDateEqual", () => {
  it("should return \"true\" when two equal \"PreDates\" are given", () => {
    const firstDate = createDate.fromArray([2022, 0, 1]);
    const secondDate = createDate.fromArray([2022, 0, 1]);

    const actualIsEqual = isDateEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });

  it("should return \"false\" when two unequal \"PreDates\" are given", () => {
    const firstDate = createDate.fromArray([2022, 0, 1]);
    const secondDate = createDate.fromArray([2022, 1, 1]);

    const actualIsEqual = isDateEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(false);
  });

  it("should return \"true\" when \"PreDate\" and \"PreDateTime\" with equal dates are given", () => {
    const firstDate = createDate.fromArray([2022, 0, 1]);
    const secondDate = createDateTime.fromArray([2022, 0, 1, 12, 0]);

    const actualIsEqual = isDateEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });

  it("should return \"true\" when two equal \"PreDateTime\" are given", () => {
    const firstDate = createDateTime.fromArray([2022, 0, 1, 13, 0]);
    const secondDate = createDateTime.fromArray([2022, 0, 1, 12, 0]);

    const actualIsEqual = isDateEqual(firstDate, secondDate);

    expect(actualIsEqual).toBe(true);
  });
});
