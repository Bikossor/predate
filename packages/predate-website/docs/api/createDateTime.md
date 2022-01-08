# `createDateTime`

Creates a new `PreDateTime` from the given parameters.

## `fromJsDate`

### Type definition

```ts
fromJsDate: (jsDate: Date) => PreDateTime;
```

### Example

```ts
const dateTime = createDateTime.fromJsDate(new Date());
```

## `fromArray`

### Type definition

```ts
fromArray: (dateArray: readonly [
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  seconds?: number,
  milliseconds?: number
]) => PreDateTime;
```

### Example

```ts
const dateTime = createDateTime.fromArray([2022, 1, 1, 12, 0]);
```

## `fromObject`

### Type definition

```ts
fromObject: (dateObject: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds?: number;
  readonly milliseconds?: number;
}) => PreDateTime;
```

### Example

```ts
const dateTime = createDateTime.fromObject({
  year: 2022,
  month: 1,
  day: 1,
  hours: 12,
  minutes: 0,
});
```

## `fromParams`

### Type definition

```ts
fromParams: (
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  seconds?: number,
  milliseconds?: number
) => PreDateTime;
```

### Example

```ts
const dateTime = createDateTime.fromParams(2022, 1, 1, 12, 0);
```
