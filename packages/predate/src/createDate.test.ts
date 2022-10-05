/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import { createDate } from ".";
import { PreDate } from "./types";

describe("createDate", () => {
  it("should create a PreDate correctly from an array", () => {
    const expectedDate: PreDate = { day: 29, month: 1, year: 2022 };

    const actualDate = createDate.fromArray([2022, 1, 29]);

    expect(actualDate).toStrictEqual(expectedDate);
  });

  // TODO: fix timezone of day property
  xit("should create a PreDate correctly from a JS date", () => {
    const expectedDate: PreDate = { day: 29, month: 1, year: 2022 };

    const actualDate = createDate.fromJsDate(new Date(2022, 1, 29));

    expect(actualDate).toStrictEqual(expectedDate);
  });

  it("should create a PreDate correctly from an object", () => {
    const expectedDate: PreDate = { day: 29, month: 1, year: 2022 };

    const actualDate = createDate.fromObject({ day: 29, month: 1, year: 2022 });

    expect(actualDate).toStrictEqual(expectedDate);
  });

  it("should create a PreDate correctly from parameters", () => {
    const expectedDate: PreDate = { day: 29, month: 1, year: 2022 };

    const actualDate = createDate.fromParams(2022, 1, 29);

    expect(actualDate).toStrictEqual(expectedDate);
  });
});
