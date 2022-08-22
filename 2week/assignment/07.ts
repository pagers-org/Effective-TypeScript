// 7. 다음에서 falsy 값만 분리해보세요.

{
  // Typescript doesn't support NaN type. So we cannot filter NaN stacially.
  // - https://github.com/Microsoft/TypeScript/issues/15135
  type Falsy<T> = undefined extends T ? T : null extends T ? T : 0 extends T ? T : "" extends T ? T : false extends T ? T : never;
  const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];
  
  function isFalsy<T>(val: T): val is Falsy<T> {
    return !val;
  }

  const filteredArr = arr.filter(isFalsy);
  console.log(filteredArr);
}
