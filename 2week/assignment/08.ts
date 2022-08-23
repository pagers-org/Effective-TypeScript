// 8. 다음 함수에서 매개 변수의 타입이 추론되도록 문맥을 만들어주세요.

type callBackFnType = (a:string, b:string) => string

const callBackFnL:callBackFnType = (a, b) => {
  return `These are ${a} and ${b}`;
};

const someFn = (callback: (a: string, b: string) => string) => {
  return callback('apple', 'banana');
};
