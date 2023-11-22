/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
import { createDateTime } from ".";
import { PreDateTime } from "./types";

describe("createDateTime", () => {
  it("should create a PreDateTime correctly from an array", () => {
    const expected: PreDateTime = {
      day: 29,
      month: 1,
      year: 2022,
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createDateTime.fromArray([2022, 1, 29, 12, 34, 56]);

    expect(actual).toStrictEqual(expected);
  });

  // TODO: fix timezone of day property
  xit("should create a PreDateTime correctly from a JS date", () => {
    const expected: PreDateTime = {
      day: 29,
      month: 1,
      year: 2022,
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createDateTime.fromJsDate(new Date(2022, 1, 29, 12, 34, 56));

    expect(actual).toStrictEqual(expected);
  });

  it("should create a PreDateTime correctly from an object", () => {
    const expected: PreDateTime = {
      day: 29,
      month: 1,
      year: 2022,
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createDateTime.fromObject({
      day: 29,
      month: 1,
      year: 2022,
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    });

    expect(actual).toStrictEqual(expected);
  });

  it("should create a PreDateTime correctly from parameters", () => {
    const expected: PreDateTime = {
      day: 29,
      month: 1,
      year: 2022,
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createDateTime.fromParams(2022, 1, 29, 12, 34, 56);

    expect(actual).toStrictEqual(expected);
  });
});
