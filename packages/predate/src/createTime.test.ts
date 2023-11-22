/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statements */
import { createTime } from ".";
import { PreTime } from "./types";

describe("createTime", () => {
  it("should create a PreTime correctly from an array", () => {
    const expected: PreTime = {
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createTime.fromArray([12, 34, 56]);

    expect(actual).toStrictEqual(expected);
  });

  it("should create a PreTime correctly from a JS date", () => {
    const expected: PreTime = {
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createTime.fromArray([12, 34, 56]);

    expect(actual).toStrictEqual(expected);
  });

  it("should create a PreTime correctly from an object", () => {
    const expected: PreTime = {
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createTime.fromObject({
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    });

    expect(actual).toStrictEqual(expected);
  });

  it("should create a PreTime correctly from parameters", () => {
    const expected: PreTime = {
      hours: 12,
      minutes: 34,
      seconds: 56,
      milliseconds: undefined,
    };

    const actual = createTime.fromParams(12, 34, 56);

    expect(actual).toStrictEqual(expected);
  });
});
