# `createTime`

Creates a new `PreTime` from the given parameters.

## `fromJsDate`

### Type definition

```ts
fromJsDate: (jsDate: Date) => PreDateTime;
```

### Example

```ts
const time = createTime.fromJsDate(new Date());
```

## `fromArray`

### Type definition

```ts
fromArray: (dateArray: readonly [
  hours: number,
  minutes: number,
  seconds?: number,
  milliseconds?: number
]) => PreDateTime;
```

### Example

```ts
const time = createTime.fromArray([12, 0]);
```

## `fromObject`

### Type definition

```ts
fromObject: (dateObject: {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds?: number;
  readonly milliseconds?: number;
}) => PreDateTime;
```

### Example

```ts
const time = createTime.fromObject({
  hours: 12,
  minutes: 0,
});
```

## `fromParams`

### Type definition

```ts
fromParams: (
  hours: number,
  minutes: number,
  seconds?: number,
  milliseconds?: number
) => PreDateTime;
```

### Example

```ts
const time = createTime.fromParams(12, 0);
```
