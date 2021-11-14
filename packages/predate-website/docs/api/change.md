# `change`

```ts
function change<T extends Date | DateTime | Time>(
  toChange: T,
  value: number,
  key: keyof T
): T;
```
