// 7. 다음에서 falsy 값만 분리해보세요.
type Falsy<T> = T extends false | '' | 0 | null | undefined ? T : never; // from lodash
const isFalsy = <T>(v: T): v is Falsy<T> => !v;

const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];
const falsyArr = arr.filter(isFalsy);
console.log(falsyArr);

// 추가..
type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T; // from lodash
const isTruthy = <T>(v: T): v is Truthy<T> => !!v;
const truthyArr = arr.filter(isTruthy);
