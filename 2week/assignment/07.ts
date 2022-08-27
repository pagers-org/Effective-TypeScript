// 7. 다음에서 falsy 값만 분리해보세요.
const arr = [0, 1, "", undefined, false, 2, undefined, null, -1, 3, NaN];

// 하.. 모르겠다.. . . . .
function isFalsy<T>(x: T) {
  if (x) return false;
  return true;
}

const falsy = arr.filter(isFalsy);
