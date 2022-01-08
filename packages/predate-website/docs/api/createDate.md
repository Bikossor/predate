# `createDate`

Creates a new `PreDate` from the given parameters.

## `fromJsDate`

### Type definition

```ts
fromJsDate: (jsDate: Date) => PreDate;
```

### Example

```ts
const date = createDate.fromJsDate(new Date());
```

## `fromArray`

### Type definition

```ts
fromArray: (dateArray: readonly [
  year: number,
  month: number,
  day: number
]) => PreDate;
```

### Example

```ts
const date = createDate.fromArray([2022, 1, 1]);
```

## `fromObject`

### Type definition

```ts
fromObject: (dateObject: {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}) => PreDate;
```

### Example

```ts
const date = createDate.fromObject({
  year: 2022,
  month: 1,
  day: 1,
});
```

## `fromParams`

### Type definition

```ts
fromParams: (year: number, month: number, day: number) => PreDate;
```

### Example

```ts
const date = createDate.fromParams(2022, 1, 1);
```
