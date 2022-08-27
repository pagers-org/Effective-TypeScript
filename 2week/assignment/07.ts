// 7. 다음에서 falsy 값만 분리해보세요.

type Falsy<T> = T extends string | number | undefined | false | null ? T : never;
function isFalsy<T>(value: T): value is Falsy<T> {
  return !value;
}

const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];
console.log(arr.filter(isFalsy));
