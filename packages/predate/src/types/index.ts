export namespace predate {
  export type Date = {
    day: number;
    month: number;
    year: number;
  };

  export type Time = {
    hours: number;
    minutes: number;
    seconds?: number;
    milliseconds?: number;
  };

  export type DateTime = Date & Time;
}
