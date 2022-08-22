// 7. 다음에서 falsy 값만 분리해보세요.
type Falsy = "false" | "" | 0 | null | undefined;


const arr = [0, 1, '', undefined, false, 2, undefined, null, -1, 3, NaN];

const isFalsy = (arg:unknown) : arg is Falsy  => {
  return !arg;
}


const isFalsyArray = arr.filter(isFalsy)

// 1. filter 메소드를 사용하는 경우에 arr.filter(item => !item) 을 사용하게 되면 타입이 제대로 추론되지 않고 (string | number | boolean | null | undefined)[] 그대로 나오게 됩니다. 
// 2. filter의 경우에는 결과값으로 []도 나올 수 있기 때문에 언제나 우리가 원하는 요소로 채워진 배열이 나온다고 보장되지 않습니다. 그렇기 때문에 사용자 정의 타입가드를 이용해서 명확한 타입을 명시해줄 수 있습니다.
