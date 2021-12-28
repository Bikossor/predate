# `change`

```ts
function change<T extends PreDate | PreDateTime | PreTime>(
  toChange: T,
  value: number,
  key: keyof T
): T;
```
