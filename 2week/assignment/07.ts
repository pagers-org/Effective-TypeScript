export {} 
// 7. 다음에서 falsy 값만 분리해보세요.
type Falsy = false | 0 | '' | null | undefined;

const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];

const isTruty = <T>(value: T | Falsy): value is T => !!value

const answer = arr.filter(isTruty)


// value는 T | Falsy한 값이지만 뒤에 value is T 타입가드를 사용하여 answer 변수의 추론에서 Falsy한 값을 제외하였습니다.
