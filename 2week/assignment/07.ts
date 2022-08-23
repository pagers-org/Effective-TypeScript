// 7. 다음에서 falsy 값만 분리해보세요.

type FalsyType = false | 0 | -0 | "" | null | undefined | NaN | 0n;

const isFalsy = (arg: unknown): arg is FalsyType => {
  return !arg
}

const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];

const result = arr.map((value) => isFalsy(value));

console.log(result);
