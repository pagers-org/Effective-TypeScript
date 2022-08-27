// 8. 다음 함수에서 매개 변수의 타입이 추론되도록 문맥을 만들어주세요.

type Callback = (a: string, b: string) => string

const callBackFn: Callback = (a, b) => {
  return `These are ${a} and ${b}`;
};

const someFn = (callback: (a: string, b: string) => string) => {
  return callback('apple', 'banana');
};

console.log(someFn(callBackFn))

// 콜백을 상수로 뽑아내면 문맥이 소실되므로 타입을 추가해 주어야 함
